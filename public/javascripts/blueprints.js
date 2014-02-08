define('javascripts/blueprints',
  [
    'jquery',
    'lodash',
    'backbone',
    'handlebars',
    'text!templates/blueprints_collection_view.html',
  ],
  function($,_,backbone){
    'use strict';

    var exports= function(){
      var stuff = {
          'character':{'name':'Reilund'},
          'blueprints':[
            {'name':'Ferox'},
            {'name':'Ham'}
          ]
        },
        handlebars=require('handlebars'),
        template_string=require('text!templates/blueprints_collection_view.html'),
        template=handlebars.compile(template_string);
      $('#blueprints_content').html(template(stuff));


    };

    return exports;
  }
);