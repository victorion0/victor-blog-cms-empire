# Blog CMS Empire 

**A Full-Stack Blog CMS Backend built with Node.js, Express & Deployed on Leapcell.io**

> **"From zero to $1M blog empire in one day!"** – *Victor & You*

---

## Live API URL

**Your Blog CMS is LIVE at:**  
🔗 [https://victor-blog-cms-empire-victorion014-b4yty9wv.leapcell.dev](https://victor-blog-cms-empire-victorion014-b4yty9wv.leapcell.dev)

---

## Features

- ✅ **Full CRUD** (Create, Read, Update, Delete Posts)  
- ✅ **Fake In-Memory DB** (No setup needed – perfect for demo!)  
- ✅ **RESTful API** with clean routes  
- ✅ **Auto-restart** with `nodemon` (dev)  
- ✅ **Deployed on Leapcell.io** (serverless)  
- ✅ **Postman Ready** – Test every endpoint!  
- ✅ **Welcome Page** – Beautiful landing for clients  

---

## API Endpoints

| Method | Endpoint             | Description           |
|--------|----------------------|-----------------------|
| `GET`   | `/api/posts`         | Get all posts         |
| `GET`   | `/api/posts/:id`     | Get single post       |
| `POST`  | `/api/posts`         | Create new post       |
| `PUT`   | `/api/posts/:id`     | Update post           |
| `DELETE`| `/api/posts/:id`     | Delete post           |

---

### Example: Create Post (POST)

```json
POST /api/posts
{
  "title": "My First $1M Blog",
  "content": "Built by Victor – live in 2 minutes!",
  "status": "published"
}

Response:
{
  "id": 1,
  "title": "My First $1M Blog",
  "content": "Built with Victor – live in 2 minutes!",
  "author": "Victor",
  "status": "published",
  "created_at": "2025-11-17T04:51:00.000Z",
  "updated_at": "2025-11-17T04:51:00.000Z"
}

Technology
Runtime
Node.js (v20)
Framework
Express.js
Database
Fake DB (Demo) → PlanetScale (Production)
Hosting
Leapcell.io
Dev Tool
nodemon, Postman
Version
Git + GitHub

Technology;
Node.js (v20)
Express.js
Fake DB (Demo) → PlanetScale (Production)
Leapcell.io
nodemon, Postman
Git + GitHub


Project Structure

blog-cms-empire/
├── server.js              Main server + welcome page
├── config/db.js           Fake DB (in-memory)
├── routes/posts.js        API routes
├── controllers/postController.js
├── leapcell.yml           Deploy config
├── .env.example           Environment template
├── .gitignore
├── README.md              ← You are here!
└── package.json

Local Setup (For Juniors Like Me)bash

# 1. Clone repo
git clone https://github.com/victorion0/victor-blog-cms-empire.git
cd blog-cms-empire

# 2. Install
npm install

# 3. Run
npm run dev

API runs on: http://localhost:5000Deployment (Leapcell.io)Push to GitHub  
Connect repo on Leapcell.io  
No env vars needed (fake DB)  
Deploy → Live in 60 seconds!

Testing with Postman
Download Collection Here (Add later)

Future Empire Plans:
User Authentication (JWT + Login)  
Rich Text Editor (TinyMCE)  
React Frontend (Dashboard)  
Comments System  
SEO & Slugs  
Monetization ($9/month Pro)

Author
Victor
Mentored by FreeCodeCamp



