const express = require('express')
const cors = require("cors");
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('API TÓPICOS ESPECIAIS!')
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const taskRoutes = require("./routes/tasks");
const authRoutes = require("./routes/auth")
taskRoutes(app);
authRoutes(app);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})