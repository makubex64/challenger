 // navbar smothScroll
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// shrink navbar on scroll
// window.onscroll = function() {
//     var scrollTop = $(window).scrollTop();
//     var navTop = document.querySelector('.navTop')
//     navTop.innerHTML = 'el escroll es:' + scrollTop
// }


// shrink navbar on scroll
var menu = document.querySelector('#menu');
var MenuTop = menu.offsetTop;

var myFunction = function(){

    var scrollTop = $(window).scrollTop();
    if(scrollTop > 100){
        menu.style.padding = "18px"
        menu.className += " bg-dark"        
    }else{
         menu.style.padding = ""
         menu.classList.remove("bg-dark")
    }
}
window.onscroll = function(){myFunction()};

// add class sidebar
const enlace = document.querySelectorAll(".enlace ul .list-group-item")
enlace.forEach(item =>{
    item.className += " bg-light text-dark"
})



// closes menu responsive when is clicked with jquery
$(".js-scroll-trigger").click(function(){
    console.log('click')
    $(".collapse").collapse("hide");
});


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

