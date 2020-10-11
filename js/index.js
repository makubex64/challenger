 // navbar smothScroll
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


 
// edit size image of carrusel
 var pro = function(){
	const image = document.querySelectorAll('.carousel-item img');
	image.forEach(item=>{
		item.style.height = "500px"
	})

}
pro()

