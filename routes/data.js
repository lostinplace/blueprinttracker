var csv = require('csv'),
    _ = require('lodash'),
    neow = require('neow'),
    fs = require('fs'),
    Q = require('q');


exports.characters = function(req,res){
  'use strict';

  var output = [],
      promises = [];
 
  //Replace these lines when we get proper key storage
  //api_keys is an array of objects with keyId and vCode attributes
  var file = fs.readFileSync('secure_data/api_keys.json',{'encoding':'utf8'}),
      apiKeys = JSON.parse(file).accounts;

  for(var index in apiKeys){
    var apiKey = apiKeys[index],
        client = new neow.EveClient({
          keyID: apiKey.keyId,
          vCode: apiKey.vCode
        });

    promises.push(client.fetch('account:Characters')
      .then(function(result){
        for(var characterID in result.characters){
          output.push(result.characters[characterID]);
        }
      }));
  }

  Q.all(promises).then(function(){
      res.send(output);
  });
};


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
