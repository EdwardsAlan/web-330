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
console.log(header.display("Alan", "Edwards", "Exercise 3.2"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>


var 
 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
// Postgres DB created
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}
// MySql DB class created
function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

// Oracle DB class created
function Oracle(properties){
    this.username = properties.username || 'admin';
    this.password = properties.password || 'o-s3cret';
    this.server = properties.server || 'localhost:5454';
    this.version = properties.version || '10g';
}
// Informix DB class created
function Informix(properties){
    this.username = properties.username || 'admin';
    this.password = properties.password || 'in-s3cret';
    this.server = properties.server || 'localhost:3030';
}
// DB defined
function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === 'MySql'){
        this.databaseClass = MySql;
    }

    if (properties.databaseType === 'Oracle'){
        this.databaseClass = Oracle;
    }

    if (properties.databaseType === "Informix"){
        this.databaseClass === Informix;
    }

    return new this.databaseClass(properties);
};

// Postgres Factory called
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

// MySql Factory called
var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

//Oracle Factory called
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "D.Vader",
    password: "Skywalker"
});
 
// Informix Factory called
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: 'Informix',
    username: 'W.Wonka',
    password: 'Chocolate'
});

// Object properties to parameters
console.log("\nOracle:" + "\n" + "username: " + "'" + oracle.username +"'," + "\n" +
"password: " + "'" + oracle.password +"'," + "\n" + "server: " + "'" + oracle.server +"'," + "\n"
+ "version: " + "'" + oracle.version +"'" + "\n" + "\n" + "\n");
console.log("\n" + "Informix:" + "\n" + "username: " + "'" + informix.username +"'," + "\n" +
"password: " + "'" + informix.password +"'," + "\n" + "server: " + "'" + informix.server +"'" + "\n");


// end program
