
function slideMenu(id){
var target = "." + $("#"+id+"").data('target');
$(".ulclass").each(function(index, element) {
$(".ulclass >li").removeClass("active");
});	
$("#"+id+"").closest("li").addClass("active");
$('html, body').animate({
scrollTop: $(target).offset().top
}, 1000);		
}



$(document).ready(function(){ 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
}); 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
});

$(document).ready(function(){ 
$('.scrolldown').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
});