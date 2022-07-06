//global variables
var text9 = $('#nine');
var text10 = $('#ten');
var text11 = $('#eleven');
var text12 = $('#twelve');
var text13 = $('#thirteen');
var text14 = $('#fourteen');
var text15 = $('#fifteen');
var text16 = $('#sixteen');
var text17 = $('#seventeen');

//var for my buttons
var btnNine = $('#button9');
var btnTen = $('#button10');
var btnEleven = $('#button11');
var btnTwelve = $('#button12');
var btnThirteen = $('#button13');
var btnFourteen = $('#button14');
var btnFifteen = $('#button15');
var btnSixteen = $('#button16');
var btnSeventeen = $('#button17');

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

// on-click function for my buttons to log to local storage
(btnNine).on("click", function(event){
    event.preventDefault()
    let item = $(text9).val();
    console.log(item);
    localStorage.setItem("nine", item);
})

(btnTen).on("click", function(event){
    event.preventDefault()
    let item = $(text10).val();
    console.log(item);
    localStorage.setItem("ten", item);
})

(btnEleven).on("click", function(event){
    event.preventDefault()
    let item = $(text11).val();
    console.log(item);
    localStorage.setItem("eleven", item);
})

(btnTwelve).on("click", function(event){
    event.preventDefault()
    let item = $(text12).val();
    console.log(item);
    localStorage.setItem("twelve", item);
})

(btnThirteen).on("click", function(event){
    event.preventDefault()
    let item = $(text13).val();
    console.log(item);
    localStorage.setItem("thirteen", item);
})

(btnFourteen).on("click", function(event){
    event.preventDefault()
    let item = $(text14).val();
    console.log(item);
    localStorage.setItem("fourteen", item);
})

(btnFifteen).on("click", function(event){
    event.preventDefault()
    let item = $(text15).val();
    console.log(item);
    localStorage.setItem("fifteen", item);
})

(btnSixteen).on("click", function(event){
    event.preventDefault()
    let item = $(text16).val();
    console.log(item);
    localStorage.setItem("sixteen", item);
})

