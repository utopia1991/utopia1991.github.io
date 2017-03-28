$('#back-top').click(function () {
	$('html, body').animate({ scrollTop: 0 }, 'fast');
	return false;
});

$(".product-line-select").click(function () {
		$selectHideId = $(this).find('input').attr("id");
		$selectShowId = $(this).find('select').attr("id");

		$("#"+$selectShowId).on("change",function(){
				$("#"+$selectHideId).val($("#"+$selectShowId).val());
		})
});
