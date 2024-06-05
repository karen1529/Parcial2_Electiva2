const express = require('express');
const router = express.Router();
const AvellaPlayer = require('../models/avellaPlayer');

// GET all players
router.get('/', async (req, res) => {
    try {
        const players = await AvellaPlayer.find().populate('teamId');
        res.status(200).json(players);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a player by ID
router.get('/:id', async (req, res) => {
    try {
        const player = await AvellaPlayer.findById(req.params.id).populate('teamId');
        if (player == null) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.status(200).json(player);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new player
router.post('/', async (req, res) => {
    const player = new AvellaPlayer({
        name: req.body.name,
        position: req.body.position,
        teamId: req.body.teamId
    });

    try {
        const newPlayer = await player.save();
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT to update a player
router.put('/:id', async (req, res) => {
    try {
        const player = await AvellaPlayer.findById(req.params.id);
        if (player == null) {
            return res.status(404).json({ message: 'Player not found' });
        }

        if (req.body.name != null) {
            player.name = req.body.name;
        }
        if (req.body.position != null) {
            player.position = req.body.position;
        }
        if (req.body.teamId != null) {
            player.teamId = req.body.teamId;
        }

        const updatedPlayer = await player.save();
        res.status(200).json(updatedPlayer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a player
router.delete('/:id', async (req, res) => {
    try {
        const player = await AvellaPlayer.findById(req.params.id);
        if (player == null) {
            return res.status(404).json({ message: 'Player not found' });
        }

        await player.remove();
        res.status(200).json({ message: 'Player deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
