$(function() {
    $( ".draggable" ).draggable();
 });
$('.clickable').click(function () {
            $(this).css('z-index', '500');
            $('.clickable').not(this).css('z-index', '1');
        });
$('.clickableSite').click(function () {
	$('.clickableSite:second-child').css('opacity', '0');
	$('.clickableSite:second-child').not(this).css('opacity', '1');
});