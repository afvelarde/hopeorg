

$('.accordion').on('click','.accordion-control',function(e){
"use strict";
e.preventDefault();//tell browser is not a submit button	
	
	$(this)//get the element the user  has clicked
	.next('.accordion-panel')//select the next or the following panel.
	.not(':animated')//if this is not current animation
	.slideToggle(); //user slideToggle to show or hide the contents
});
/*

$('.accordion').on('click','.accordion-control',function(e){
"use strict";
	e.preventDefault();
    $(this).toggleClass("active").next('.accordion-panel').slideToggle()
    .closest('li').siblings().find('.accordion-control').removeClass('active').next('.accordion-panel').slideUp();
});
*/