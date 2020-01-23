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
   1. # AOT

==============================================================================
Directives
3 Types of Directives

1. Component Directives
2. Structurel Directives
   1. Add/Remove DOM elements based on condition
      1. \*ngFor
         1. for.of loop
      2. \*ngIf
         1. if condition
      3. \*ngSwitch-ngSwitchCase
3. Attribute Directives
   1. Applied as attributes of HTML elelemts
      1. ngClass
      2. $valid/$invalid

===============================================================================================
ReactiveForms

1. A single Form Object that Map with Model class using tight Coupling
2. ReactiveFormsModule from @angular/forms
   1. FormGroup
      1. Mapping between <form> tag and Angular Object Model of ReactiveForms i.e. the Model class
   2. FormControlCollection
      1. Representation of editable elements inside <form> tag map with peoperties from model class
         1. FormControl, map with a property from Model class
            1. The 'value' property of FormControl will post data of form to Amngular Model
         2. formControlName, the attribute like 'name' for HTML element

==============================================================================================

1. Bootstrapping Multiple Components
2. Communication Across Components
   1. Parent Child
      1. Child component renders withn scope of parent component
      2. The Child COmponent must define a public get/set property decoarated with @Input() decorator to accept value from parent.
      3. The Input() decoratot will make the property used for property Binding []
      4. If Child want to Send message to parent then,
         1. Child must have the EventEmitter<T> property decorated with @Output() decorator
            1. EventEmitter<T> will emit/bubbled up an event from child to parent and T is the payload i.e. the data to be emitted
            2. The property of the type EventEmitter and Decoarted with @Output can be used for Event Binding. The Parent Must subscribed to this event and data <T> will be read by parent using \$event
   2. Publish/Subscribe aka Disconnecetd
   3.
3. Using Services
   1. Within single module
   2. External Module
   3. Eztarnl Lib for Services
4. Routing
