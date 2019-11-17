const db = require('../database/dbConfig')

module.exports = {
    findByListId,
//   add,
//   find,
//   findBy,
  findById
};

function findByListId(listId) {
    return db('items')
        .join('bucketlists', 'bucketlists.id', '=', 'items.bucketlist_id')
        .where('bucketlists.id', listId)
        .select('name', 'description', 'link', 'deadline', 'completed')
        
        .then(items => items.map(item => {
            const isCompleted = item.completed === 1;
            return {...item, completed: isCompleted};
        }));
}
// function find() {
//   return db('users').select('id', 'username');
// }

// function findBy(filter) {
//   return db('users').where(filter);
// }

// async function add(user) {
//   const [id] = await db('users').insert(user);

//   return findById(id);
// }

function findById(id) {
  return db('items')
    .where({ id })
    .first();
}