'use strict';

require('./vendor')();

// load the main file
var appModule = require('../index');
// replaces ng-app = appName
angular.element(document).ready(function() {
    angular.bootstrap(document, [appModule.name], {
        // strictDi: true
    });
})