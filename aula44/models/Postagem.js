const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Postagem = new Schema({
    titulo: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    descircao: {
        type: String,
        required: true
    },
    consteudo: {
        type: String,
        required: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'categorias',
        required: true
    },
    data: {
        type: Date,
        default: Date.now(),
    }
});

mongoose.model('ppstagens',Postagem);