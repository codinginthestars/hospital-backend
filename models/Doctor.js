const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const doctorSchema = new Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    // More as I build the app
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;