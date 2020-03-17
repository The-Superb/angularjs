let app = angular.module("myApp", ["ngRoute"])

// Routes
app.config(function($routeProvider){
    $routeProvider
    .when("/", { 
        templateUrl: "html/home.html",
        controller: "homeController"
    })
    // Navbar
    .when("/tuning", { 
        templateUrl: "html/tuning.html",
        controller: "tuningController"
    })
    .when("/bodyKits", { 
        templateUrl: "html/bodyKits.html",
        controller: "bodyKitsController"
    })
    .when("/aboutUs", { 
        templateUrl: "html/aboutUs.html",
        controller: "defaultController"
    })
    .when("/contactUs", { 
        templateUrl: "html/contactUs.html",
        controller: "contactUsController"
    })
    .when("/projects", { 
        templateUrl: "html/projects.html",
        controller: "projectsController"
    })
})

// Controller
app.controller("defaultController", function($scope) {
    $scope.about = "We build the best and fastest cars on earth. If you want a body kit or just some simple tuning we can do it all! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
})

// Directives
.directive("appheader", function() {
    return {
        template: '<nav class="navbar navbar-expand-lg navbar-dark bg-light"> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button><div class="collapse navbar-collapse justify-content-center" id="navbarNav"><ul class="navbar-nav"> <a class="navbar-brand" href="#!/"> <img src="/img/Kalendae Tuning Logo.png" width="40" height="38" alt=""> </a><li class="nav-item"> <a class="nav-link navbar-f ml-3" href="#!/">Home</a></li><li class="nav-item"> <a class="nav-link navbar-f ml-4" href="#!tuning">Tuning</a></li><li class="nav-item"> <a class="nav-link navbar-f ml-4" href="#!bodyKits">Body Kits</a></li><li class="nav-item"> <a class="nav-link navbar-f ml-4" href="#!aboutUs">About Us</a></li><li class="nav-item"> <a class="nav-link navbar-f ml-4" href="#!contactUs">Contact Us</a></li><li class="nav-item"> <a class="nav-link navbar-f ml-4" href="#!projects">Projects</a></li></ul></div> </nav>'
    }
})
.directive("appfooter", function() {
    return {
        template: '<footer class="text-center box-footer"> <p class="pt-3 footer-p">Copyright &copy; 2020 Kalendae Tuning</p> </footer>'
    }
})
.directive("box", function() {
    return {
        template: '<div class="containerBox border border-dark"> <div class="center boxSelect pr-4 pt-2"> <div class="pb-4"> <select name="Make" class="rounded"> <option value="" disabled selected hidden>Make</option> <option value="Lamborghini">Lamborghini</option> </select> </div> <div class="pb-4"> <select name="Model" class="rounded"> <option value="" disabled selected hidden>Model</option> <option value="Huracán">Huracán</option> <option value="Aventador">Aventador</option> </select> </div> <div class="pb-4"> <select name="Year" class="rounded"> <option value="" disabled selected hidden>Year</option> <option value="2018">2018</option> </select> </div> <select name="Engine" class="rounded"> <option value="" disabled selected hidden>Engine</option> <option value="v10">v10</option> </select> </div> <button onclick="hideShow()" type="button" class="btn btn-primary float-right">Calculate</button> </div>'
    }
})

function hideShow() {
    let x = document.getElementById("hideShowDiv");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}