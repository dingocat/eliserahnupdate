$(function() {
    $( ".draggable" ).draggable();
 });
$('.clickable').click(function () {
            $(this).css('z-index', '500');
            $('.clickable').not(this).css('z-index', '1');
        });
$('.site').hover(function () {
            $(this).css('z-index', '500');
            $('.site').not(this).css('z-index', '1');
        });
$('#exohelixsite').click(function() {
	$('.descriptionExo').css('opacity', '1');
	$('.descriptionArs').css('opacity', '0');
	$('.descriptionExo').css('z-index', '500');
	$('.descriptionArs').css('z-index', '0');
});
$('#arsllc').click(function () {
	$('.descriptionArs').css('opacity', '1');
	$('.descriptionExo').css('opacity', '0');
	$('.descriptionArs').css('z-index', '500');
	$('.descriptionExo').css('z-index', '0');
})