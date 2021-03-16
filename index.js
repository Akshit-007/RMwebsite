$(window).on('load', function() {
       $('#staticBackdrop').modal('show');
   });

$(".forgotpassword-link").click(function(){
   $('#staticBackdrop').modal('hide');
    $('#staticBackdrop-4').modal('show');
})

$(".signup-link").click(function(){
  $('#staticBackdrop').modal('hide');
   $('#staticBackdrop-3').modal('show');
})

// $(".login-button").click(function(){
//   $('#staticBackdrop').modal('hide');
//    $('#staticBackdrop-2').modal('show');
// })

$(".return-home-page-link").click(function(){
  $('#staticBackdrop-4').modal('hide');
   $('#staticBackdrop').modal('show');
})


$(".login-top-link").click(function(){

   $('#staticBackdrop').modal('show');
})

// if ( window.history.replaceState ) {
//         window.history.replaceState( null, null, window.location.href );
//     }

$(".login-link-modal-bottom").click(function(){

   $('#staticBackdrop').modal('show');
   $('#staticBackdrop-3').modal('hide');
})


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
