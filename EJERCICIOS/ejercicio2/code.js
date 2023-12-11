$(document).ready(function () {
	$('#show').hide();
	$('#hide').click(function () {
		$('p').hide();
		$(this).hide();
		$('#show').show();
	});

	$('#show').click(() => {
		$('p').show();
		$('#hide').show();
		$('#show').hide();
	});
});
