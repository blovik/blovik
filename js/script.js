alert("it works");

$(document).ready(function(){

	// $("h3").on("mouseenter", function() {
	// 	$("div").find("span").css("background-color","#A6FFE1")
	// });

	// $(".button").on("mouseleave", function() {
	// 	$("span").css("background-color","#white")
	// });

	// $(".whoop").on("mouseenter", function() {
	// 	$("span").css("background-color","#A6FFE1")
	// });

	// $(".whoop").on("mouseleave", function() {
	// 	$("span").css("background-color","white")
	// });

	// $("h3").on("click", function() {
	// 	$(this).next().css("displayToggle", "inline");
	// });


	$('.accordion dd > a').on('click', function() {
    	$(this).next().toggleClass('active');
	});

	$(".toggle-content").hide();
    $(".toggle-title").click(function() {
        $(this).next(".toggle-content").slideToggle("normal");
        $(this).toggleClass('active');
    });


});