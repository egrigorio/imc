import { Router } from "express";

const calculosRouter = Router()

const calculoIMC = (req, res) => {        
    try {
        const { peso, altura } = req.query
        if (peso == 0 || altura == 0) {
            res.status(400)
        }
        let imc = (peso / (altura * altura)).toFixed(1)
        console.log(imc)        
        
        let estado = ''
        if (imc < 18.5) {
            estado = 'bp'; // baixo peso
        } else if (imc >= 18.5 && imc < 25) {
            estado = 'pn'; // peso normal
        } else if (imc >= 25 && imc < 30) {
            estado = 'ep'; // excesso de peso
        } else if (imc >= 30 && imc < 35) {
            estado = 'ob'; // obesidade
        } else if (imc >= 35) {
            estado = 'oe'; // obesidade extrema
        }
     
        res.status(200).send({imc, estado})
    } catch (error) {
        res.send(error)
    }
}

calculosRouter.get('/imc', calculoIMC)

export default calculosRouter

