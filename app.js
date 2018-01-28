/* IMPLEMENTING THE MODULE PATTERN USING IIFE's AND CLOSURES */


/* Immediately-Invoked Function Expression (IIFE)- It is an anonymous function that executes immediately right after it's created. 
       Syntax::
           ES5 -> ( function (foo) { 
                           return foo;
                           }) ('foo value');
           ES6 -> ( (foo) => foo ) ('foo value'); 
       a) First pair of parantheses ( function (foo) { return foo; } ) OR ( (foo) => foo )turns the code within 
          (in this case, a function) into an expression.
       b) Second pair of parantheses ('foo value'); calls the function that results from that evaluated expression.
       c) This pattern is often used to avoid polluting the Global scope, because all the variables used inside the IIFE
          (like in any other normal function ) are not visible outside its scope. In other words, it is useful to avoid declaring 
          variables in the Global Scope. It should use with the conditional operator and should use in Closures to prevent fold over.
          
     */

/* Module that handles the Budget Data  */

var budgetController = (function () {

    // Private data that are not visible outside this Scope and can only be accessible from inside. 

    var x = 27; // A variable Declaration

    var add = function (a) { // A function Declaration
        return x + a;
    }

    return {
        // Public data methods will have access to Private data (in this case, above variable and function), so that other functions 
        // outside this anonymous function can have access to them. Since this method is also a part of anonymous function, 
        // we use the "return" keyword to achieve the desired outcome. This is called Data Encapsulation. 
        // Here we used publicTest method.
        publicTest: function (b) {
            // console.log(add(b));

            return add(b);
        }
    }

})();


/* Module that handles the UI data */

var UIController = (function () {

    // some code

})();


/* Module that connects above two independent modules */

var controller = (function (budgetCtlr, UICtlr) { // Modules can also have arguments bcuz they are just function expressions. 

        // budgetController.publicTest(); We could have use like this but it's not a good practise bcuz it will be less independent 
        // and also if we got to change the name of the module, then we have to do it all over the code which is a time consuming thing.   

        var z = budgetCtlr.publicTest(7);

        // To print this out in console, We use return method.

        return {
            anotherPublicTest: function () {
                console.log(z);
            }
        }

    })
    (budgetController, UIController);
