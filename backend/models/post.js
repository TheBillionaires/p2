const db = require('../util/database');

module.exports = class Post {
  constructor(title, body, user, created) {
    this.title = title;
    this.body = body;
    this.user = user;
    this.created = created;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM posts');
  }

  static save(post) {
    return db.execute(
      'INSERT INTO posts (title, body, user, created) VALUES (?, ?, ?, ?)',
      [post.title, post.body, post.user, post.created]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM posts WHERE id = ?', [id]);
  }
};
