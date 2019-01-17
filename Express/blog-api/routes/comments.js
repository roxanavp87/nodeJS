const app = require('../server');
const { check, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
let posts = require('../data/posts.json');

// get comments by post id
app.get('/posts/:postId/comments', (req, res) => {
    const comments = posts[req.params.postId].comments;
    res.send(comments);
});

// // add a new post
// app.post('/posts',[ 
//     check('name').trim().isLength({ min: 3 }),
//     check('url').trim().isURL(),
//     check('text').trim().not().isEmpty()],
//     (req, res) => {
//         // Finds the validation errors in this request and wraps them in an object with handy functions
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(422).json({ errors: errors.array() });
//         }
//         let newPost = {
//             name: req.body.name,
//             url: req.body.url,
//             text: req.body.text,
//             comments: []
//         };
//         let id = posts.length;
//         posts.push(newPost);
//         res.status(201).send({id: id});
//     }
// );

// // update a post
// app.put('/posts/:id', [ 
//     check('name').trim().isLength({ min: 3 }),
//     check('url').trim().isURL(),
//     check('text').trim().not().isEmpty(),],
//     (req, res) => {
        
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(422).json({ errors: errors.array() });
//         }
//         const id = req.params.id;
//         posts[id].name = req.body.name;
//         posts[id].url = req.body.url;
//         posts[id].text = req.body.text
//         res.send(posts[id]);
//     }
// );

// app.delete('/posts/:id', (req, res) => {
//     posts.splice(req.params.id, 1);
//     res.send();
// });