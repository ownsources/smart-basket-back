/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: 'string',
      size: 270
    },
    description: {
      type: 'string',
      size: 270
    },
    price: {
      type: 'integer',
      size: 11,
    },

    category: {
      model: 'category'
    }

  },
  beforeCreate: function (obj, next) {
    // Product.count().exec(function(err, cnt){
    //   if(err) next(err);
    //   else{
    //     obj['id'] = cnt + 1;
    //     next(null);
    //   }
    // })
    Product.find()
      .sort('id DESC')
      .limit(1)
      .exec(function (err, cnt) {
        if (err) next(err);
        else {
          obj['id'] = cnt._id + 1;
          next(null);
        }
      });
  }
};

