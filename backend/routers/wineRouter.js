import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Wine from '../models/wineModel.js';
import { wineslist } from '../winelist.js';

const wineRouter = express.Router();

wineRouter.get('/', expressAsyncHandler(async(req, res) => {
    const wines = await Wine.find({});
    res.send(wines);
}))


wineRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    // await Wine.remove({});
    const createdWines = await Wine.insertMany(wineslist.wines);
    res.send({ createdWines });
}))


wineRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    const wine = await Wine.findById(req.params.id);
    if (wine){
        res.send(wine);
    } else {
        res.status(404).send({message: 'Wine not found'});
    }
}));

export default wineRouter;