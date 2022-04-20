const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wineSchema = new Schema({
    name: { type: String, required: true },
    //red or white:
    // type: String,
    varietal: String,
    // mealPairs: [String],
    // img: String,
    notes: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

const Wine = mongoose.model('Wine', wineSchema);

module.exports = Wine;