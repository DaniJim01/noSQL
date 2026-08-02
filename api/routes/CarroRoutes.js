const express = require('express');

const router = express.Router();

const Carro = require('../models/Carro');

//Ruta get para obtener todos los carros
router.get('/', async(req, res)=>{

    try {

        const carrosObjeto = await Carro.find();
        res.json(carrosObjeto);

    } catch (error) {

        res.status(500).json({ message: error.message,mensaje : "Se fue en caca todo" });
    
    }

});

//Ruta get para obtener un carro por su marca
router.get('/:marca', async(req, res)=>{

    try {

        const carrosObjeto = await Carro.find({ marca: req.params.marca });
        res.json(carrosObjeto);

    } catch (error) {

        res.status(500).json({ message: error.message,mensaje : "Se fue en caca todo" });
    
    }

});

//Ruta post para crear un nuevo carro
router.post('/', async(req, res)=>{

    try {

        const carrosObjeto = new Carro(req.body);

        const carroRespuesta = await carrosObjeto.save();

        res.status(201).json({
            data: carroRespuesta,
            mensaje : "Se creo el carro correctamente"
        });

    } catch (error) {

        res.status(500).json({ message: error.message,mensaje : "Se fue en caca todo" });
    
    }

});


//Ruta put para actualizar un carro por su id
router.put('/:id', async(req, res)=>{

    try {

        const carrosActual = await Carro.findByIdAndUpdate(
            req.params.id, //Que carro quiero actualizar 
            req.body, //Con que lo identifico
            { new: true }); //Como lo voy a actualizar
        
        res.status(202).json({
            data: carrosActual,
            mensaje : "Se actualizo el carro correctamente"
        });

    } catch (error) {

        res.status(500).json({ 
            message: error.message,mensaje : "Se fue en caca todo" });
    
    }

});

//Ruta delete para eliminar un carro por su id
router.delete('/:id', async(req, res)=>{

    try {

        const carrosActual = await Carro.findByIdAndDelete(req.params.id);

        res.status(202).json({
            data: carrosActual,
            mensaje : "Se elimino el carro correctamente"
        });

    } catch (error) {

        res.status(500).json({ 
            message: error.message,mensaje : "Se fue en caca todo" });

    }

});


module.exports = router;