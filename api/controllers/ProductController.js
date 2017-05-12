/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	select: function(req, res){
    Product.find()
        .exec(function (err, products) {
          if (err) return res.send(500);
          var newProd = [];
          for(i=0; i< products.length; i++){
            if(products[i].category === req.category){
              newProd.push(products[i]);
            }
          }
          res.json(newProd);
        });
  }
};

