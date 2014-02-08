requirejs.config({
  paths:{
    'handlebars': 'handlebars/handlebars',
    'jquery':'jquery/jquery',
    'lodash' : 'lodash/dist/lodash',
    'backbone' : 'backbone/backbone',
    'text' : 'text/text'
  },
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});