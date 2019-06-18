
const moogdb = require('mongoose');


moogdb.connect('mongodb://localhost/my_database', { useNewUrlParser: true });
const Schema = moogdb.Schema;

const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    email: {
        type: String, required: true
    },
    pwd: {
        type: String, required: true
    },
    name: {
        type: String
    },
    date: {
        type: Date, default: Date.now
        /*  */
    }
});

const User = moogdb.model('User', userSchema);


module.exports = User;