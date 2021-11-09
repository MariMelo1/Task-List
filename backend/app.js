const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const taskRoutes = require("./routes/tasks");
taskRoutes(app);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})