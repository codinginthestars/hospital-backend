const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    // More as I build the app
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;