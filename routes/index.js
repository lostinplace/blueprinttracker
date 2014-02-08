
/*
 * GET home page.
 */

exports.index = function(req, res){
  var output = { title: 'Express' };
  res.send(output);
};