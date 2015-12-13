//inject the routerApp and its routes in app.routes.js & inject ngAnimate
angular.module('routerApp', ['routerRoutes', 'ngAnimate'])



//CREATE THE CONTROLLERS

//this will be the controller for the ENTIRE site
.controller('mainController', function(){
    
    var vm = this;
    
    //create a bigMessage variable to diplay our view
    vm.bigMessage = 'A smooth sea never made a skilled sailor.';
})

//home page route specific controller
.controller('homeController', function(){
    
    var vm = this;
    
    vm.message = 'Welcome to the Home Page!';
})

//ABOUT page controller
.controller('aboutController', function(){
    
    var vm = this;
    
    vm.message = 'Bienvenue a About us!';
})

//CONTACT US page controller
.controller('contactController', function(){
    
    var vm = this;
    
    vm.message = 'Contact us.... not really. jk';
})