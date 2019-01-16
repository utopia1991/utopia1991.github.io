// 轮播图
$('.bxslider').bxSlider({
  auto: true,
  speed: 600
})

$('.help-block-l ul li').click(function() {
  let id = $(this).attr('data-id')

  $(this).addClass('active').siblings().removeClass('active')
  $('#' + id).removeClass('hide').siblings().addClass('hide')
})

$('.js-city-select').change(function(){
  window.location.href = "./citys.html"
})

$('#to-cart ul.cart li').hover(function() {
  $(this).addClass('active').siblings().removeClass('active')
})