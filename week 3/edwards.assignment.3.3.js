/*
============================================
; Title:  header.js
; Author: Professor Krasso 
; Date:   10 March 2019
; Modified By: Alan Edwards
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
var header = require('../edwards.assignment.week.3/edwards-header');
console.log(header.display("Alan", "Edwards", "Exercise 3.3"));
'/n';
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function() {    
    var instance;    
    function createInstance() {        
        var postgresDatabase = new Object("Database instance initialized!");        
        return postgresDatabase;    
    }     
    
    
    return {        
        getInstance: function() {            
            if (!instance) {                
                instance = createInstance();            
            }             
            return instance;        
        }     
    } })();
    
  function DatabaseSingletonTest()
  {
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("\n" + "Same database instance? %s ", oracle === postgres)
  } 
    DatabaseSingletonTest();
// end program
