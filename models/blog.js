const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    nom: String,
    prenom: String,
    anciennete: Number,
    adresse: {
        numero: Number,
        codepostal: Number,
        ville: String
    }
}, {timestamps: true });

const Blog = mongoose.model('employee', blogSchema);

module.exports = Blog;