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
// };

var menu = document.querySelector('#menu');
var MenuTop = menu.offsetTop;

var myFunction = function(){
    var scrollTop = $(window).scrollTop();

    if(scrollTop > 100){
        menu.style.padding = "22px"        
    }else{
         menu.style.padding = ""
    }
}
window.onscroll = function(){myFunction()};


 
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

