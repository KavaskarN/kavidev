(function () {
    'use strict';

    alphaApp.controller('LoginController', ['$scope', 'gameMgr', LoginController]);

    function LoginController($scope, gameMgr) {
        
        $scope.isLoggedIn = false;
        $scope.username = "smichelotti";
        $scope.password = "123";
        
        $scope.login = function(){
            gameMgr.login($scope.username, $scope.password, function(){
                $scope.$apply(function(){
                    $scope.isLoggedIn = true;
                });
            });
        };
        
        $scope.logout = function(){
            $scope.isLoggedIn = false;
            gameMgr.logout();
        };
    }
})();

