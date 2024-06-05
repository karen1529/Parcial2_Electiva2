const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: { type: String, required: true },
    city: String,
    founded: Number
}, { collection: 'teams' });

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
