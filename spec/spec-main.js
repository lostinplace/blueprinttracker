var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/\.spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

  

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '',

    paths: {
        'jquery': 'jquery/jquery'
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: function(){
        window.__karma__.start();
    }
});