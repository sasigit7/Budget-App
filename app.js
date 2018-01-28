// BUDGET CONTROLLER 

var budgetController = (function () {

        // Some Code

    })
    ();





//UI CONTROLLER 

var UIController = (function () {

        // Some Code

    })
    ();




//GLOBAL APP CONTROLLER 
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {
        // 1. Get the field input data
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the Budget
        // 5. Display the Budget on the UI.

        console.log("it work's.");
    }

    /*
    document.querySelector('.add__btn').addEventListener('click', function () {
        
        // console.log('Button was clicked');
    });
    */

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);


    document.addEventListener('keypress', function (event) { // We can just use letter 'e' as well in place of word 'event'.

        // console.log(event); Press any key on the keyboard 

        if (event.keyCode === 13 || event.which === 13) { // We can use either of them or both (keyCode , which) 

            // console.log('ENTER WAS PRESSED.');   

            ctrlAddItem();

        }

    });

})

(budgetController, UIController);
