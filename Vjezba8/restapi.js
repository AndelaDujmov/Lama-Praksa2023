const express = require('express');
const fsjs = require('fs')
const app = express();

app.use(express.json());

var save = (data) => {
  const json = JSON.stringify(data, null, 2);
  fsjs.writeFileSync('./data.json', json);
}

app.get('/', (req, res) => {
  res.status(200).send("Welcome to the app!");
});

app.get('/users/:id', (req, res) => {
  fsjs.readFile('./data.json', 'utf-8', (err, data) => {
    if(err) throw err;

    var allUsers = JSON.parse(data).users;
    var user = allUsers.find(u => u.id === parseInt(req.params.id));

    !user ? res.status(400).send("Unable to find user") : res.status(200).send(user);
  });
});

app.get('/posts/:id', (req, res) => {
  fsjs.readFile('./data.json', (err, data) => {
    if(err) throw err;

    var allPosts = JSON.parse(data).posts;
    var post = allPosts.find(p => p.id === parseInt(req.params.id));

    !post ? res.status(404).send("Unable to find post!") : res.status(200).send(post);
  });
});

app.get('/posts', (req, res) => {
  fsjs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;

    var allPosts = JSON.parse(data).posts;

    var start = new Date(req.query.start);
    const end = new Date(req.query.end);

    var filtered = allPosts.filter((post) => {
      var date = new Date(post.last_update);
      return (date >= start) && (date <= end);
    });
    res.status(200).send(filtered);
  });
});

app.post('/users/emails/:id', (req, res) => {
  fsjs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;

    var parsed = JSON.parse(data);
    var user = parsed.users.find((u) => u.id === parseInt(req.params.id));

    if(!user)
      res.status(404).send("User not found");

    user.email = req.body.email;
    save(parsed);
    res.status(200).send(user);
  });
});

app.put('/posts', (req, res) => {
  fsjs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const parsedData = JSON.parse(data);
    const { title, body, user_id } = req.body;
    const last_update = new Date().toISOString();
    const newPost = { id: parsedData.posts.length + 1, user_id, title, body, last_update };
    parsedData.posts.push(newPost);
    save(parsedData); // save updated data to disk
    res.send(newPost);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
}); 