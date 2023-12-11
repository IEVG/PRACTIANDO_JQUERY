$(document).ready(function () {
	$('p').click(function () {
		$(this).hide();
	});

	$('button').click(() => {
		$('p').show();
	});
});
