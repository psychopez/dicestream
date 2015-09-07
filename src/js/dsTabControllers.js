'use strict';

var dsApp = angular.module('dicestreamApp');

dsApp.controller('diceTabCtrl', ['$scope', 'diceService', function ($scope, diceService) {
    $scope.roll = function() {
        diceService.rollDice();
    };
    
    $scope.clear = function() {
        diceService.clearDice();
    };
    
    $scope.getDicetray = function() {
        return diceService.getDicetrayArray();
    };
}]);

dsApp.controller('textTabCtrl', ['$scope', 'textCardService', function($scope, textCardService) {
    //[{text: "test1",
    //  textcolor: "#000000",
    //  bgcolor: "#ffffff"},...]
        
    $scope.getTextCards = function() {
        return textCardService.getCards();
    };
    
    $scope.addCard = function(cardtext) {
        // TODO use the default values here.
        textCardService.addNewCard({text:cardtext, textcolor:"#000000", bgcolor:"#ff9900"});    
    };
}]);

dsApp.controller('lowerThirdTabCtrl', ['$scope', 'lowerThirdService', 'settingsService', function($scope, lowerThirdService, settingsService) {
    var lowerThirdOverlay;
    $scope.lowerThirdButtonText = "Create Lower Third";

    //Load the defaults from the settings as a convience
    $scope.lowerThirdColor = settingsService.currentSettings.LOWER_COLOR.color;
    $scope.lowerThirdName  = settingsService.currentSettings.LOWER_TEXT_FIRST.text;
    $scope.lowerThirdSecond = settingsService.currentSettings.LOWER_TEXT_SECOND.text;

    $scope.buildLowerThird = function(name, second, color) {
        if(lowerThirdOverlay) {
            clearLowerThird();
        }
        lowerThirdOverlay = lowerThirdService.createLowerThird($scope.lowerThirdName, $scope.lowerThirdSecond, $scope.lowerThirdColor);
        lowerThirdOverlay.setVisible(true);
        $scope.lowerThirdButtonText = "Update Lower Third";
    };

    $scope.clear = function() {
        clearLowerThird();
        $scope.lowerThirdButtonText = "Create Lower Third";
    };
    
    $scope.$watch(function(scope) { return scope.lowerThirdColor },
        function(newValue, oldValue) {
            if(lowerThirdOverlay) {
                clearLowerThird();
                $scope.lowerThirdColor = newValue;
                lowerThirdOverlay = lowerThirdService.createLowerThird($scope.lowerThirdName, $scope.lowerThirdSecond, $scope.lowerThirdColor);
                lowerThirdOverlay.setVisible(true);
            }
        }
    );
    
    var clearLowerThird = function(){
        lowerThirdOverlay.setVisible(false);
        //lowerThirdOverlay.dispose();
    };
}]);

dsApp.controller('settingsCtrl', ['$scope', 'settingsService', function($scope, settingsService){

    $scope.settings = settingsService.currentSettings;
}]);
