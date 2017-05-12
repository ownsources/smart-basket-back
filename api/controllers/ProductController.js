/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	select: function(req, res){
    Post.find(req.category)
        .exec(function (err, products) {
          if (err) return res.send(500);
          res.json(products);
        });
  }
};

