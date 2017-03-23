mui.init({
	swipeBack: true //启用右滑关闭功能
});

mui(".shop-details-order-menu").on('tap', '.mui-control-item', function(){
	$(this).addClass("shop-menu-active").siblings().removeClass("shop-menu-active");
});

mui('#cellPopover').on('tap','#cellCancel',function(){
	mui('#cellPopover').popover('hide');
});
