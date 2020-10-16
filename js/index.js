 // navbar smothScroll
//  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// shrink navbar on scroll
// window.onscroll = function() {
//     var scrollTop = $(window).scrollTop();
//     var navTop = document.querySelector('.navTop')
//     navTop.innerHTML = 'el escroll es:' + scrollTop
// }

$('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

// shrink navbar on scroll
var menu = document.querySelector('#menu');
var MenuTop = menu.offsetTop;

var myFunction = function(){

    var scrollTop = $(window).scrollTop();
    if(scrollTop > 100){
        menu.style.padding = "22px"
        menu.className += " bg-dark"        
    }else{
         menu.style.padding = ""
         menu.classList.remove("bg-dark")
    }
}
window.onscroll = function(){myFunction()};


// closes menu responsive when is clicked with jquery
$(".js-scroll-trigger").click(function(){
    $(".collapse").collapse("hide")
})


 // edit size image of carrusel
 var pro = function(){
	const image = document.querySelectorAll('.carousel-item img');
	image.forEach(item=>{
		item.style.height = "690px"
        item.style.maxHeight = "100%"
        item.className += " img-fluid"
	})


}
pro()

