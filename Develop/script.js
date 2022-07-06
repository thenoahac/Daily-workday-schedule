

// these two variables are used to track the date in real time as well as my pc's time
var now = moment().format("dddd, MMMM Do");
$("#currentDay").text(now);

var currentHour = moment().hour();
console.log(currentHour);


// logic function to determine the color of the text areas
$( ".time-block" ).each(function() {
   var blockHour =  $( this ).attr("id");
   if (currentHour > blockHour) { 
    $( this ).addClass("past")
    }
    else if ( currentHour == blockHour ) {
        $( this ).addClass("present")
    }
    else {
        $( this ).addClass("future") 
    }
});


