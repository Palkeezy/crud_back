let router = require('express').Router();


const ItemModel = require('../models/ItemModel');

router.get('/items', async (req, res, next) => {
    try {
        const items = await ItemModel.find({});

        if (!items) throw new Error('Items not found');

        res.json({
            success: true,
            msg: items
        })

    } catch (e) {
        res.json({
            success: false,
            msg: e.message
        })
    }
});

router.post('/item', async (req, res, next) => {
    try {
        const {name, in_stock} = req.body;

        if (!name) throw new Error('Some fields is incorrect');

        const newItem = await ItemModel.create({
            name: name,
            in_stock: in_stock
        });

        res.json({
            success: true,
            msg: newItem
        });
    } catch (e) {
        res.json({
            success: false,
            msg: e.message
        })
    }
});


router.put('/item/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const {in_stock} = req.body;

       // if (!id || !in_stock) throw new Error('Some data is incorrect');

        const updatedItem = await ItemModel.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: {
                    in_stock: in_stock
                }
            });
        res.json({
            success: true,
            msg: 'Item has updated'
        });
    } catch (e) {
        res.json({
            success: false,
            msg: e.message
        });
    }
});

router.delete('/item/:id', async (req, res, next) => {
    try {
        const {id} = req.params;

        if (!id) throw new Error('Id is incorrect');

        const deletedItem = await ItemModel.deleteOne({
            _id: id
        });

        res.json({
            success: true,
            msg: deletedItem
        });
    } catch (e) {
        res.json({
            success: false,
            msg: e.message
        });
    }
});

module.exports = router;
