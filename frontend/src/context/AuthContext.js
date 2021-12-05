import React, { useState } from 'react';
import { defaults } from 'utils/header';
import { auth } from 'services/Auth';

const {REACT_APP_USER_KEY} = process.env

const AuthContext = React.createContext()

function setToken(token = null) {
    if (!!token) {
      defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      defaults.headers.Authorization = "";
      delete defaults.headers.Authorization;
    }
  }
  
  function restoreLoginFromStorage() {
    let storageUsuario = window.localStorage.getItem(REACT_APP_USER_KEY);
    if (!!storageUsuario) {
      storageUsuario = JSON.parse(storageUsuario);
      setToken(storageUsuario?.token);
  
      return storageUsuario;
    }

    return null;
  }
  
  function persistLoginInStorage(usuario) {
    window.localStorage.setItem(REACT_APP_USER_KEY, JSON.stringify(usuario));
  }

  function AuthProvider(props) {
    const [isLoginLoading, setIsLoadingLoading] = useState(false);
    const [data, setData] = useState(restoreLoginFromStorage());
  
    const logout = () => {
      setData(null);
      setToken(null);
      persistLoginInStorage(null);
    };
  
    const login = async (email, password) => {
      setIsLoadingLoading(true);
  
      try {
        const responseData = await auth({ email, password });
        if (!!responseData?.error) {
          throw new Error(responseData?.error);
        }
      
        const usuarioData = {
          usuario: responseData.data.user,
          token: responseData.data.token,
        };
        setData(usuarioData);
        setToken(usuarioData.token);
        persistLoginInStorage(usuarioData);
      } catch (err) {
        // se der erro ~ podemos forçar um logout para garantir que ninguém sobrará logado
        logout();
        console.log('erro: ')
        throw new Error(err.message || "Não foi possível efetuar seu login no momento");
      } finally {
        setIsLoadingLoading(false);
      }
    };
  
    return <AuthContext.Provider value={{ data, logout, login, isLoginLoading }} {...props} />;
  }
  
  const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
      throw new Error(`useAuth must be used within a AuthProvider`);
    }
    return context;
  };
  
  export { AuthProvider, useAuth };
  