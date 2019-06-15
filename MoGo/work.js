// menu--burger
document.querySelector('.menu--burger').addEventListener('click', function(e) {
		e.preventDefault();
		this.classList.toggle('active');
		linker_menu.classList.toggle('nav_active');
	})
// menu--burger






// poisk--transform
document.querySelector('.poisk--transform').addEventListener('click', function(e) {
		e.preventDefault();
		posik__header.classList.toggle('active');
	})

document.querySelector('.poisk--transform1').addEventListener('click', function(e) {
		e.preventDefault();
		posik__header1.classList.toggle('active');
	})

document.querySelector('.poisk_fixed').addEventListener('click', function(e) {
		e.preventDefault();
		posik__header_fixed.classList.toggle('active_poisk');
	})
// poisk--transform





// jQuery



// header--fixed
$(function(){
	var Inner_header1 = $("#Inner_header1");
	var scrollOffset = 0;
	var menu_fixed_burger = $("#menu_fixed_burger");
	var posik__header_fixed = $("#posik__header_fixed");
	$(window).on("scroll", function(){

	scrollOffset = $(this).scrollTop();

	if (scrollOffset >= 700) {
		Inner_header1.addClass("active");
		menu_fixed_burger.addClass("active_burger");
	}else {
		Inner_header1.removeClass("active");
		menu_fixed_burger.removeClass("active_burger");
		posik__header_fixed.removeClass("active_poisk");
	}

	});
});
// header--fixed



// Smooth scroll
$("[data-sroll]").on("click", function(event){
	event.preventDefault();

		var $this = $(this),
			blockId = $this.data('sroll');
			blockId1 = $this.data('sroll');
			blockOffset = $(blockId).offset().top;
			blockOffset = $(blockId1).offset().top;
			
	$("#linker_menu").removeClass("nav_active");
	$("#menu_fixed_burger").removeClass("active");

	$("html, body").animate({
		scrollTop: blockOffset - 60
	}, 500);
});
// Smooth scroll




// block_arcadion
$("[data-collapse]").on("click", function(event){
	event.preventDefault();

	var $this = $(this),
		blockId = $this.data('collapse');

		$(blockId).slideToggle(200);
});
// block_arcadion



// jQuery