var w;
var h;

$(document).ready(function () {
	//SMART ANIMATE
	$("[data-animate]").addClass("hideit");
	$("[data-animate]").appear();

	$(document).on("appear", "[data-animate]", function () {
		var $el = $(this);
		if (!$el.hasClass("hideit"))return false;
		var animation = $el.data("animate");
		var duration = $el.data("duration");
		var delay = $el.data("delay") || 0;
		setTimeout(function () {
			if (duration) {
				$el.css("-webkit-animation-duration: " + duration + ";animation-duration: " + duration + ";");
			}
			$el.removeClass("hideit").addClass("animated " + animation);
			$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
				$el.removeClass("animated " + animation);
			});
		}, delay);
	});

	$(document).on("disappear", "[data-animate]", function () {
		var $el = $(this);
		var repeat = $el.data("repeat") || false;
		if (repeat === true)
			$el.addClass("hideit");
	});

	$(".animated-progressbar").appear();
	$(document).on("appear", ".animated-progressbar", function () {
		var $el = $(this).find(".progress-bar");
		var percentage = $el.data("percentage");
		var duration = $el.data("duration");
		var delay = $el.data("delay") || 0;

		setTimeout(function () {
			$el.width(percentage + "%");
		}, delay);
	});

	$('#h5').animate({width:"89%"}, 300);
	$('#js').animate({width:"85%"}, 400);
	$('#css').animate({width:"87%"}, 500);
	$('#express').animate({width:"80%"}, 600);
});
