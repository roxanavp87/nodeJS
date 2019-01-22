const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/edx-course-db', { useNewUrlParser: true });

let bookSchema = mongoose.Schema( {
    name: String,
    year: {
        type:  Number,
        get(value) {
            return '/' + value;
        }
    },
    active: {
        type: Boolean,
        default: false
    },
    keyword: {
        type: String,
        set(value) {
            return value.toLowerCase();
        }
    },
    createdAt: {
        type: Date, 
        default: new Date()
    },
    updatedAt: {
        type: Date, 
        default: new Date()
    }
});

bookSchema.virtual('activeStr').get( ()=> {
    return (this.active) ? 'yes' : 'no';
});

let Book = mongoose.model('Book', bookSchema);

let practicalNodeBook = new Book({ name: 'Learning NodeJS', keyword: 'NODEjs', year: 2010 });

practicalNodeBook.save((err, results) => {
    if(err) {
        console.log(err);
        process.exit(1);
    } else {
        console.log('Saved: ', results);
        console.log('activeStr: ', results.activeStr);
        Book.findById(practicalNodeBook.id, (err, bookDoc) => {
            console.log('findById ', bookDoc)
            bookDoc.active = true;
            console.log()
            bookDoc.save(console.log)
        })
        // process.exit(0);
    }
})