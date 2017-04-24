(function() {
	// 悬浮栏
	$(document).scroll(function() {
		var a = $(window).scrollTop(),
			b = $(window).height()
			c = $("#footer").offset().top,
			$sub = $("#sub-footer"),
			d = $(".sub-header-affix").offset().top,
			$subHeader = $('.sub-header-affix');

		if (c >= a && c < a + b) {
			if (!$sub.hasClass('affix')) {
				$sub.addClass('affix');
			}
		} else {
			$sub.removeClass('affix');
		}

		if (d >= 140) {
			$subHeader.removeClass('none').addClass('header-affix');
		} else {
			$subHeader.addClass('none').removeClass('header-affix');
		}
	});

	// search
	function search() {
		var text = $('#searchInput').val();
		var url = 'https://ai.taobao.com/search/index.htm?key=' + text + '&pid=mm_54988395_23866520_79878241';

		if (text != "") {
 			window.open(url);
		}
	}

	document.onkeydown = function(event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode == 13){
			search();
		}
	};
})();
