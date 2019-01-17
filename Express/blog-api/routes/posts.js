const app = require('../server');
let posts = require('../data/posts.json');


app.get('/posts', (req, res) => {
    res.status(200).send(posts);
});

app.post('/posts', (req, res) => {
    if (!req.body.name.trim() || !req.body.url.trim() || !req.body.text.trim())  return res.status(400).send();
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