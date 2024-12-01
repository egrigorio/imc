import express from 'express'
import cors from 'cors'
import calculosRouter from './routes/calculos.route.js'
const app = express()

app.use(express.json())
app.use(cors({
  origin: '*', // tá como * pra aceitar td e n dar problema de cors, mas depois tem que tirar isso aqui pra aceitar só a rota 
  credentials: true
}));

app.use(calculosRouter)

const port = 3001

app.listen(port, () => {
    console.log(`Server running at port: ${port}`); 
  });
