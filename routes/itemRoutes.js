const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

router.post('/', async (req, res) => {
    const {name, quantity} = req.body;
    const newItem = new Item({name, quantity});
    await newItem.save();
    res.status(201).json(newItem);
})

router.put('/:id', async (req, res) => {
    const {name, quantity, isPurchased} = req.body;
    const updateItem = await Item.findByIdAndUpdate(
        req.params.id,
        {name, quantity, isPurchased},
        {new: true},
    );
    res.json(updateItem);
})

router.delete('/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).send();
})

module.exports = router;
