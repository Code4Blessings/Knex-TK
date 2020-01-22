const db = require('./db-config');

db.select('*').from('users');

//shortcut
db('users');
//resolves to an array of users

db('users').where({ id: 1 });
//resolves to an array containing any users that match the where.

db('users').insert({ name: 'danny', age: 12 });

db('users').insert({ name: 'robin', age: 44});

db('users').where({ id: 2}).update({ age: 45});

db('users').where ({ id: 2}).del();