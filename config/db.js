// FAKE IN-MEMORY DB FOR CLIENT DEMO
let posts = [
  {
    id: 1,
    title: "Welcome to My Blog",
    content: "This is a demo post. Built with Victor – $1M loading!",
    author: "Victor",
    status: "published",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

let nextId = 2;

// Fake query function
const query = async (sql, values = []) => {
  if (sql.includes('SELECT * FROM posts ORDER BY')) {
    return [posts];
  }
  if (sql.includes('SELECT * FROM posts WHERE id =')) {
    const id = values[0];
    const post = posts.find(p => p.id === id);
    return post ? [post] : [];
  }
  if (sql.includes('INSERT INTO posts')) {
    const newPost = {
      id: nextId++,
      title: values[0],
      content: values[1],
      author: values[2] || 'Victor',
      status: values[3] || 'draft',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    posts.push(newPost);
    return [{ insertId: newPost.id }];
  }
  if (sql.includes('UPDATE posts SET')) {
    const id = values[4];
    const post = posts.find(p => p.id === id);
    if (post) {
      post.title = values[0];
      post.content = values[1];
      post.author = values[2];
      post.status = values[3];
      post.updated_at = new Date().toISOString();
      return [{ affectedRows: 1 }];
    }
    return [{ affectedRows: 0 }];
  }
  if (sql.includes('DELETE FROM posts')) {
    const id = values[0];
    posts = posts.filter(p => p.id !== id);
    return [{ affectedRows: posts.length }];
  }
  return [[]];
};

module.exports = { query };