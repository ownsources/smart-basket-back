/**
 * Category.js
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

    products:{
      collection: 'product',
      via: 'category'
    }
  },
  beforeCreate: function(obj, next){
    Category.count().exec(function(err, cnt){
      if(err) next(err);
      else{
        obj['id'] = cnt + 1;
        next(null);
      }
    })
  }
};

