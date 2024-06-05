const express = require('express');
const router = express.Router();
const Team = require('../models/team');

router.get('/', async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        if (team == null) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json(team);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
