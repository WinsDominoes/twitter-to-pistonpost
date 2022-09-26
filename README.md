# Twitter to PistonPost
A simple node.js project that retrieves tweet data from IFTTT then submits data to PistonPost

## Usage
This is basically a thing that links IFTTT to PistonPost backend server. You can use this for more than Twitter stuff, you could use it with Facebook or your own custom social media site.

It receives data from a POST request with JSON input
```
{
    "tweet": "God Speed, Spider-Man",
    "description": "I have no idea what to put here, really. ",
    "type": "TEXT",
    "tags": "WinsTweets",
    "unlisted": "false"
}
```

| Key           | Usage                                                                 | Type    | 
|---------------|-----------------------------------------------------------------------|---------|
| `tweet`       | The post title (In this case the tweet content)                       | text    |
| `description` | The post description (You can put anything here, I don't really know) | text    |
| `type`        | The post type, this should be TEXT                                    | text    |
| `tags`        | The post tags (You could put the hashtags here)                       | text    |
| `unlisted`    | Option if you want the post to be unlisted                            | boolean |


Then sends a request to PistonPost backend server with the data
Boom! You have a new post. 

## Config
**Because PistonPost uses JWT for authentication, you would need your auth session token. Follow the steps below**

The config file is provided in `config/default.json.example`
1. Copy the value of the Cookie `__Secure-next-auth.session-token` (I recommend using the Cookie-Editor extension for those who do not hate themselves)
2. Paste it in `"jwtToken"`
3. Rename the file to `default.json`

## Run
Do `node index.js`

## Credit
All credit to [@AlexProgrammerDE](https://www.github.com/AlexProgrammerDE) for making PistonPost, check it out at [https://post.pistonmaster.net](https://post.pistonmaster.net)

For more information regarding PistonPost's API endpoints, I recommend you this page: [PistonPost API Docs](https://post.pistonmaster.net/swagger)