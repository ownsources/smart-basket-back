/**
 * User.js
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
    login: {
      type: 'string',
      size: 270
    },
    password: {
      type: 'string',
      size: 270
    },
    balance: {
      type: 'integer',
      size: 11,
      defaultsTo: function() {
        return 1000;
      }
    }

  }
};

