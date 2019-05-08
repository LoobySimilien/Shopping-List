//wrapper function (waits for DOM to load)
// $ selector  wakes up the DOM for usage - when you are ready, do the following function

// $(document) replaces document.getElementById

$(document).ready(function() {

// add event listener that listens for a click on the id #add

    $('#add').click(function() {
        // grab user input
        var userInput = $('input[name=shoppinglistitem]').val();

        //test to make we are grabbing value
        console.log(userInput);

     // add user input to the DOM as a list item
      $('.list').append('<li>'+'<input class="checked-item" type="checkbox">'+userInput+'</li>');

        return false;

        //keep track of the user toggling each item and create an event listener
        $(document).on('click', ".checked-item", function(){

            //capture the current list item user is clicking on
            $(this).parent().toggleClass('is-it-checked');

        })

        // add an event listener to the check button
        $('.checked').on('click', function(e){

// you can console.log and event and see it in the console --- the e from the direct line above
            // prevent the default browser/from action from happening

            e.preventDefault();

            // remvoe the checked items
              $('.is-it-checked').remove();
        })

//  -----------------------------
        // add an event listener to the reset button
        $('.reset-list' ).on('click', function(e){

// you can console.log an event and see it in the console --- the e from the direct line above
            // prevent the default browser/from action from happening

            e.preventDefault();

            // reset the listed items -- you can use either the whole list (use class of the reset button ) or use the class of the individual items
              $('li').remove();
        })
//  -----------------------------

        })
      
    })




// 


