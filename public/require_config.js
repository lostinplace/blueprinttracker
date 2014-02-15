requirejs.config({
  paths:{
    'handlebars': 'handlebars/handlebars',
    'jquery':'jquery/dist/jquery',
    'lodash' : 'lodash/dist/lodash',
    'backbone' : 'backbone/backbone',
    'text' : 'text/text',
    'underscore' : 'underscore/underscore'
  },
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});
