require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const githubData = {
  "login": "Ganesh-Sharmaz",
  "id": 151487165,
  "node_id": "U_kgDOCQeCvQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/151487165?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Ganesh-Sharmaz",
  "html_url": "https://github.com/Ganesh-Sharmaz",
  "followers_url": "https://api.github.com/users/Ganesh-Sharmaz/followers",
  "following_url": "https://api.github.com/users/Ganesh-Sharmaz/following{/other_user}",
  "gists_url": "https://api.github.com/users/Ganesh-Sharmaz/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Ganesh-Sharmaz/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Ganesh-Sharmaz/subscriptions",
  "organizations_url": "https://api.github.com/users/Ganesh-Sharmaz/orgs",
  "repos_url": "https://api.github.com/users/Ganesh-Sharmaz/repos",
  "events_url": "https://api.github.com/users/Ganesh-Sharmaz/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Ganesh-Sharmaz/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ganesh Sharma",
  "company": null,
  "blog": "",
  "location": "Ghaziabad, India",
  "email": null,
  "hireable": true,
  "bio": "👨‍💻🎨🏋‍♂️\r\n",
  "twitter_username": null,
  "public_repos": 16,
  "public_gists": 0,
  "followers": 3,
  "following": 5,
  "created_at": "2023-11-20T03:09:48Z",
  "updated_at": "2024-02-09T15:07:44Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login!</h1>')
})

app.get('')

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})