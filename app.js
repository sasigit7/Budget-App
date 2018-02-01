// BUDGET CONTROLLER - keeps track of all the incomes and expenses. 

var budgetController = (function () {
        // We use Function Constructor to create lots of Objects and it usually starts with a CAPITAL letter.

        var Expense = function (id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        };

        var Income = function (id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        };


        //If a user want to input 10 incomes, then we would create 10 income Objects. The best solution to store these objects 
        // is storing them into an array. 

        /*
       var allExpenses = [];
       var allIncomes = [];
       var totalExpenses = 0;
      
        */

        // Both of these arrays will store all instances of either expenses or incomes.
        /* 
         var data = {
            allExpenses: [], 
            allIncomes: []
        } 
        */
        // Can also be written as ...
        var data = {
            allItems: {
                exp: [],
                inc: []
            },

            totals: {
                exp: 0,
                inc: 0
            }
        }

    })
    ();



//UI CONTROLLER 

var UIController = (function () {

    // Instead of using the classes all over the code and make them complex to debug, We can just put them in a DOMstrings Object with
    // it's properties and values and change them as we need.

    // Private variable
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };

    // Use methods, functions and variables in this private module. So that APP CONTROLLER can have access to it and make it public. 

    return {
        getInput: function () {
            return {
                /*
                 type: document.querySelector('.add__type').value, 
                 description: document.querySelector('.add__description').value,
                 value: document.querySelector('add__value').value
                  */

                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        // Exposing DOMstrings to the public by calling it.
        getDOMstrings: function () {
            return DOMstrings;
        }
    };

})();




//GLOBAL APP CONTROLLER 
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        // Created a DOM variable to get the DOMstrings from UIController above.
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) { // We can just use letter 'e' as well in place of word 'event'.

            // console.log(event); Press any key on the keyboard 

            if (event.keyCode === 13 || event.which === 13) { // We can use either of them or both (keyCode , which) 

                // console.log('ENTER WAS PRESSED.');   

                ctrlAddItem();
            }

        });
    };



    var ctrlAddItem = function () {
        // 1. Get the field input data
        var input = UICtrl.getInput();
        // console.log(input);

        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the Budget
        // 5. Display the Budget on the UI.

        // console.log("it work's.");
    };

    /*
    document.querySelector('.add__btn').addEventListener('click', function () {
        
        // console.log('Button was clicked');
    });
    */

    // document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    return {
        init: function () {
            console.log('Application has started.');
            setupEventListeners();
        }
    };

})

(budgetController, UIController);

controller.init();
