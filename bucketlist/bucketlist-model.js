const db = require('../database/dbConfig')

module.exports = {
  create,
//   find,
  findBy,
  findById,
  update
};

// function find() {
//   return db('bucketlist').select('id', 'public');
// }

function findBy(filter) {
  return db('bucketlists').where(filter);
}

async function create(user_id) {

  const [id] = await db('bucketlists').insert({user_id: user_id});

  return findById(id);
}

function findById(id) {
  return db('bucketlists').where({id}).first();
}

function update(id, bucketlist) {
    return db('bucketlists')
    .where({id: id})
    .update(bucketlist)
}