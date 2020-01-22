angular.json

Standard Packages
1. @angular/core
   1. The Core Object model for Angular with following classes
      1. Component, NgModule, Injectable, Pipe, Ditrective, Input, Output, HostListener, EventEmitter, etc.
      2. The 'Decorator' concept
         1. They are like attribute applied on class/interface/member/method to set its behavior
            1. @NgModule --> Applied on class to make it as Angular Module
            2. @Conponent -->Applied on class to make it as Angular Component
            3. @Injectable --> Applied on class to make it as Angular Service
            4. @Directive --> DIrective
            5. @Pipe --> Pipe
2. @angular/common
   1. Common Module aka the creation of reusable libraries/module in one angular application
   2. @angular/common/http
      1. Provides HttpClientModule for performing HTTP Communication
3. @angular/forms
   1. FormsModule --> For Two-Way binding
   2. ReactiveFormsModule --> LOB apps
4. @angular/router
   1. RouterModule
5. @angular/platform-browser
   1. Provides 'BrowserModule' that manages loading the angular app in browser
6. @angular/platform-browser-dynamic
   1. platformBrowserDynamic object to bootstrap angular application
   2. Load the NgModule in Browser using BrowserModule
7. @angular/compiler
   1. AOT 
