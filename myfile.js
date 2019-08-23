// JavaScript Document

var text = $('.text-overflow');
    var btn = $('.btn-overflow');
    var   h = text[0].scrollHeight; 

if(h >100) {
	btn.addClass('less');
	btn.css('display', 'block');
}

btn.click(function(e) 
	
		  
{
	"use strict";
  e.stopPropagation();

  if (btn.hasClass('less')) {
      btn.removeClass('less');
      btn.addClass('more');
      btn.text('Read less');
      text.animate({'height': h});
  } else {
      btn.addClass('less');
      btn.removeClass('more');
      btn.text('Read more');
      text.animate({'height': '75px'});
  }  
});