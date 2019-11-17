const router = require('express').Router();
const Middleware = require('../bucketlist/bucketlist-middleware');
const Items = require('../item/items-model');

// const Users = require('../user/user-model');
// const Bucketlist = require('./bucketlist-model');
// const Items = require('../item/items-model');

router.get('/:id/items/:item_id', Middleware.setUserId, Middleware.getBucketList, (req, res) => {
  const bucketlist = req.params.bucketlist;
  const itemId = req.params.item_id;
  Items.findById(bucketlist.id).then(item => {
    console.log(item)
      res.status(200).json(item);
    }).catch(error => {
      console.log(error);
      res.status(500).json({"message": "error fetching bucketlist item"});
    });
});

module.exports = router;

