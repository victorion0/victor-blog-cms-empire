const db = require('../config/db');

// GET all posts
const getPosts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// GET single post
const getPost = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const [rows] = await db.query('SELECT * FROM posts WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// CREATE post
const createPost = async (req, res) => {
  const { title, content, author, status } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'Title and content required' });

  try {
    const [result] = await db.query(
      'INSERT INTO posts (title, content, author, status) VALUES (?, ?, ?, ?)',
      [title, content, author || 'Victor', status || 'draft']
    );
    const [newPost] = await db.query('SELECT * FROM posts WHERE id = ?', [result.insertId]);
    res.status(201).json(newPost[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// UPDATE post - FIXED: REQUIRE AT LEAST 1 FIELD
const updatePost = async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content, author, status } = req.body;

  // ← NEW: CHECK IF ANY FIELD IS PROVIDED
  if (!title && !content && !author && !status) {
    return res.status(400).json({ error: 'At least one field (title, content, author, status) is required to update' });
  }

  try {
    const [result] = await db.query(
      'UPDATE posts SET title = ?, content = ?, author = ?, status = ? WHERE id = ?',
      [title, content, author, status, id]
    );
    if (result.affectedRows === 0) {
      // Check if post exists
      const [check] = await db.query('SELECT * FROM posts WHERE id = ?', [id]);
      if (check.length === 0) {
        return res.status(404).json({ error: 'Post not found' });
      }
      // If post exists but no change → still success
      const [updated] = await db.query('SELECT * FROM posts WHERE id = ?', [id]);
      return res.json(updated[0]);
    }

    const [updated] = await db.query('SELECT * FROM posts WHERE id = ?', [id]);
    res.json(updated[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// DELETE post
const deletePost = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const [result] = await db.query('DELETE FROM posts WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getPosts, getPost, createPost, updatePost, deletePost };