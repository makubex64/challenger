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

