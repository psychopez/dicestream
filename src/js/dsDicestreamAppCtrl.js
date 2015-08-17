'use strict';

var dsApp = angular.module('dicestreamApp', ['ui.bootstrap', 'diceButton', 'diceService','dsTrayDice', 'textWidget', 'lowerThirdService']);

dsApp.config(function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist(['https://dl.dropbox.com/u/1177409/**', 'https://s3.amazonaws.com/dicestream/**', 'self']);
});

dsApp.constant('config', {
    //filePrefix: 'https://dl.dropbox.com/u/1177409/dicestream/public/src',
    filePrefix: '%rootPath%',
//    file-prefix: 'https://s3.amazonaws.com/dicestream/',
    imgroot: 'https://s3.amazonaws.com/dicestream/images/'
});