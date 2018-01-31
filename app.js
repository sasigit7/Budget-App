// BUDGET CONTROLLER 

var budgetController = (function () {

        // Some Code

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
