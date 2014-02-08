var csv = require('csv'),
  _ = require('lodash');

exports.blueprints = function(req,res){
  'use strict';


// opts is optional
  var output = [],
    headers = [];

  csv()
    .from.path('data/RubiconBlueprints.csv',
      {
        delimiter: ',',
        escape: '"'
      })
    .transform(function(row,index){

      if(index===0){
        headers=row;
      }else{
        output.push(_.object(headers,row));
      }

    }).on('end',function(){
      res.send(output);
    });
    
};