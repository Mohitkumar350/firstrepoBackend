require('dotenv').config()
const express = require('express');
const app = express()
const port = 4000
const githubData={
  "login": "Mohitkumar350",
  "id": 220497659,
  "node_id": "U_kgDODSSG-w",
  "avatar_url": "https://avatars.githubusercontent.com/u/220497659?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Mohitkumar350",
  "html_url": "https://github.com/Mohitkumar350",
  "followers_url": "https://api.github.com/users/Mohitkumar350/followers",
  "following_url": "https://api.github.com/users/Mohitkumar350/following{/other_user}",
  "gists_url": "https://api.github.com/users/Mohitkumar350/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Mohitkumar350/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Mohitkumar350/subscriptions",
  "organizations_url": "https://api.github.com/users/Mohitkumar350/orgs",
  "repos_url": "https://api.github.com/users/Mohitkumar350/repos",
  "events_url": "https://api.github.com/users/Mohitkumar350/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Mohitkumar350/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Mohit kumar",
  "company": null,
  "blog": "LinkedIn: https://www.linkedin.com/in/mohit-kumar-0a3a2b322",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": " Frontend Developer | BCA Student\r\nBuilding responsive web apps using HTML, CSS & JavaScript.\r\nCurrently learning React.js 🚀",
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 5,
  "following": 3,
  "created_at": "2025-07-12T14:20:12Z",
  "updated_at": "2026-06-01T03:34:48Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twiter', (req, res) => {
  res.send('Mohitdotcom')
})
 app.get('/login', (req, res) => {
  res.send('<h1>Login Page</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai or code</h2>')
})
app.get('/github',(req,res)=>{
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})