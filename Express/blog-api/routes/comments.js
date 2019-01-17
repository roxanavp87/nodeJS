const app = require('../server');
const { check, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
let posts = require('../data/posts.json');

// get comments by post id
app.get('/posts/:postId/comments', (req, res) => {
    const comments = posts[req.params.postId].comments;
    res.send(comments);
});

// add a new comment
app.post('/posts/:postId/comments',[ 
    check('text').trim().not().isEmpty()],
    (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        let newComment = {
            text: req.body.text
        };
        let id = posts[req.params.postId].comments.length;
        posts[req.params.postId].comments.push(newComment);
        res.status(201).send({id: id});
    }
);

// update a comment
app.put('/posts/:postId/comments/:commentId', [ 
    check('text').trim().not().isEmpty()],
    (req, res) => {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        posts[req.params.postId].comments[req.params.commentId].text = req.body.text;
        res.send(posts[req.params.postId].comments[req.params.commentId]);
    }
);

// delete a comment
app.delete('/posts/:postId/comments/:commentId', (req, res) => {
    posts[req.params.postId].comments.splice(req.params.commentId, 1);
    res.send();
});