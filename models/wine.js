const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wineSchema = new Schema({
    name: { type: String, required: true },
    varietal: String,
    type: String,
    // mealPairs: [String],
    img: String,
    notes: String,
    rating: Number,
    apiId: { type: String, unique: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

const Wine = mongoose.model('Wine', wineSchema);

module.exports = Wine;