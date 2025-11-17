const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const postRoutes = require('./routes/posts');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Welcome Page
app.get('/', (req, res) => {
  res.send(`
    <div style="text-align:center; margin-top:80px; font-family:Arial;">
      <h1 style="color:#1a73e8;">BLOG CMS BACKEND LIVE!</h1>
      <h2 style="color:#34a853;">Make 1m with Victor</h2>
      <p>API: <code>/api/posts</code></p>
      <a href="/api/posts" style="background:#1a73e8; color:white; padding:10px 20px; text-decoration:none; border-radius:5px;">SEE POSTS</a>
    </div>
  `);
});

// Routes
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`BLOG CMS dey run for port ${PORT} – Make 1m with Victor!`);
  console.log(`Test: http://localhost:${PORT}/api/posts`);
});