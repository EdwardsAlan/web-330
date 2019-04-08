/*
============================================
; Title:  EMS mileston
; Author: Professor Krasso
; Modified: Alan Edwards
; Date:   7 April 2019

;===========================================
*/

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <title>Assignment 7.4</title>

    <!-- Stylesheet - Bootstrap -->
    <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
    integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
    crossorigin="anonymous"
  />
    
    <!-- JavaScript Libraries -->

    <script src="knockout.3.5.0.js"></script>
  </head>
    
  </head>
  <body>
        <div role="main" class="container">
            <div></div>
                <br/><br/>
                
                <h2>JavaScript Tutorial of Objects</h2>
                
                <table class="table table-dark table-striped table-hover">
                    
                    <thead>
                        <tr>
                            
                            <th>Title</th>
                            <th>Description</th>
                            <th>Link</th>
                        
                        </tr>
                    
                    </thead>
                    
                    <tbody data-bind="foreach: tutorial">
                        
                        <tr>
                            
                            <td data-bind="text: title"></td>
                            
                            <td data-bind="text: description"></td>

                            <td><a data-bind="text: link, attr: {href: link, target: '_blank'}">  </td>
                                 
                            
                        </tr>
                    
                    </tbody>
                
                </table>
                <br/>
            
            </div>
            
    <script>    
                function JSViewModel() {
                    console.log=ko
                    this.courseURL = ("https://www.w3schools.com/Js/js_object_methods.asp");
                this.tutorial = ko.observableArray([
                {title: "Methods", description: "Properties that hold function values", link: "https://www.w3schools.com/Js/js_object_methods.asp" },
                {title: "Classes", description: "Javascripts take on object-oriented concepts", link:"https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677 "},
                {title: "Prototype", description: "Prototype is a link between the constructor function and object", link:"https://www.w3schools.com/js/js_object_prototypes.asp"},
                {title: "Object", description: "Collection of properties with a pair of key and value", link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"},
                {title: "Array", description: "Collection similar types of elements", link:"https://javascript.info/array"}
                ]);
                }
    
                ko.applyBindings(new JSViewModel());


    
            
                </script>   
  </body>
</html>
