function vertical_center() {
	$(".v-center").each(function() {

		var margin = ( $(this).parent().height() - $(this).height() ) / 2;
		$(this).css("display", "block");
		$(this).css("margin-top", margin);
		$(this).css("margin-bottom", margin);
	});
}