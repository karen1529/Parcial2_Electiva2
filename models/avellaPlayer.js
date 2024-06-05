const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const avellaPlayerSchema = new Schema({
    name: { type: String, required: true },
    position: String,
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' }
}, { collection: 'avellaPlayers' });

const AvellaPlayer = mongoose.model('AvellaPlayer', avellaPlayerSchema);

module.exports = AvellaPlayer;
