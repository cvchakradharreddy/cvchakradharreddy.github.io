var myInfo = {
    "list": ["Venkata Challa", "A Web developer", "A Scripty", "A Movie Buff", "A Sports Fan", "An App Developer"],
    "counter": 0
};

(function runAnimation(myInfo) {
       
       window.setInterval(function (myInfo) {
            var elm = $("#myInfoList");
            elm.removeClass("fadeInDown");
            elm.addClass("fadeOutDown");
           if(myInfo.counter>=myInfo.list.length-1){
                myInfo.counter = 0;
            } else {
                myInfo.counter++;
            }
            //console.log("Value:" + myInfo.list +"counter:"+myInfo.counter);
            setTimeout(function(myInfo){
                var elm = $("#myInfoList");
                elm.removeClass("fadeOutDown");
                elm.html(myInfo.list[myInfo.counter]);
                elm.addClass("fadeInDown");
            }, 1000, myInfo)
       }, 5000, myInfo);
    })(myInfo);

var app = angular.module('challaApp', []);
app.controller('homeCtrl', function($scope) {
    
        
    var getGreetings = function(){
        var greet = "Welcome";
        var today = new Date();
        var curHr = today.getHours();
        if (curHr < 12) {
            greet = greet + ", Good morning!";
        } else if (curHr < 18) {
            greet = greet + ", Good afternoon!";
        } else {
            greet = greet + ", Good evening!";
        }
        return greet;
    };
    
    $scope.greet = getGreetings();
    $scope.viewPages = [{
        "id": "homePage",
        "name": "Home"
    },{
        "id": "skillsPage",
        "name": "My Skills"
    },{
        "id": "experiencePage",
        "name": "My Experience"
    },{
        "id": "contactPage",
        "name": "Contact me"
    }];
    $scope.viewPage = $scope.viewPages[0].id;
    
    $scope.scrollDownto = function(section){
         $("html, body").animate({
            scrollTop: $("#"+section).offset().top
        });
    };
    
   $scope.selectPage= function(section) {
       $scope.viewPage = section;
   }
   

    
	
});

