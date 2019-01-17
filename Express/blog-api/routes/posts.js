const app = require('../server');
const { check, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
let posts = require('../data/posts.json');


app.get('/posts', (req, res) => {
    res.status(200).send(posts);
});

app.post('/posts',[
    check('name').trim().isLength({ min: 3 }),
    check('url').trim().isURL(),
    check('text').trim().not().isEmpty(),
    sanitizeBody('notifyOnReply').toBoolean()], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    let newPost = {
        name: req.body.name,
        url: req.body.url,
        text: req.body.text,
        comments: req.body.comments
    };
    let id = posts.length;
    posts.push(newPost);
    res.status(201).send({id: id});
});