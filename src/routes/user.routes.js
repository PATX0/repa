const express = require('express');
const router = express.Router();
const user = require('../models/user.model');

router.get('/', async (req, res) => {
    try {
        const users = await user.getUsers();
        res.json(users);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

// router.get('/:id', async(req, res) => {
//     const id = req.params.id;

//     try {
//         const u = await user.getUser(id);
//         console.log(u);
//         res.json(u);
//     } catch(error) {
//         res.status(500).json({message: error.message});
//     }
// });

module.exports = router;