
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        {id: 1, 
          name: 'skydive', 
          description: 'Skydive from 20K', 
          link: 'https://halojumper.com/', 
          deadline: '2020-10-10', 
          completed: false, 
          bucketlist_id: 1},
        {id: 2, 
          name: 'skydive again', 
          description: 'Skydive from 30K', 
          link: 'https://halojumper.com/', 
          deadline: '2020-10-10', 
          completed: true, 
          bucketlist_id: 1},
        {id: 3, 
            name: 'skydive again', 
            description: 'Skydive from 20K', 
            link: 'https://jumpers.com/', 
            deadline: '2022-10-10', 
            completed: false, 
          bucketlist_id: 2},    
      ]);
    });
};
