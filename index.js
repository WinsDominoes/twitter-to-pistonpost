const config = require('config');
const unirest = require('unirest');
const FormData = require('form-data');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

const token = config.get("jwtToken");
const port = config.get("server.port");
const host = config.get("server.host");

app.post('/post', (req2, res2) => {
    let tweetData = req2.body;

    console.log("New Tweet has been posted!");
    console.log("---REQUEST BODY---");
    console.log(tweetData);

    console.log("Processing request...")

    unirest('PUT', 'https://post.pistonmaster.net/backend/post')
    .headers({
        'Content-Type': 'multipart/form-data',
        'Cookie': '__Secure-next-auth.session-token=' + token
    })

    .field('title', tweetData.tweet)
    .field('content', tweetData.description)
    .field('type', 'TEXT')
    .field('tags', tweetData.tags)
    .field('unlisted', tweetData.unlisted)

    // customizing response body
    .end(function (res) {
        console.log("Tweet has been posted!")
        console.log(res.body);

        res2.send(res.body);
    });
    
})

const server = app.listen(port, host, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`App is running on ${host}:${server.address().port}`);
});