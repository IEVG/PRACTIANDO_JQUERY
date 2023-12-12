$(document).ready(function () {
	//event click
	$('.click').click(function () {
		$(this).hide();
	});

	//event dblclick
	$('.dblclick').dblclick(function () {
		$(this).hide();
	});

	//event mouseenter
	$('#p1').mouseenter(function () {
		alert('You entered p1!');
	});

	//event mouseleave
	$('#p2').mouseleave(function () {
		alert('Bye! you now leave p2!');
	});

	//event mousedown
	$('#p3').mousedown(function () {
		alert('Mouse down over p3!');
	});

	//event mouseup
	$('#p4').mouseup(function () {
		alert('Mouse up over p4!');
	});

	//hover(): method takes two functioons and is a combination mouseenter() and mouseleave()
	$('#p5').hover(
		function () {
			alert('You entered p5!');
		},
		function () {
			alert('Bye! You now leave p5!');
		}
	);

	//Event focus()
	$('input').focus(function () {
		$(this).css('background-color', 'tomato');
	});
	$('input').blur(function () {
		$(this).css('background-color', 'lightgreen');
	});

	// using the method on()
	$('#p6').on('click', function () {
		$(this).hide();
	});

	$('#p7').on({
		mouseenter: function () {
			$(this).css('color', 'gray');
		},
		mouseleave: function () {
			$(this).css('color', 'lightblue');
		},
		click: function () {
			$(this).css('color', 'brown');
		}
	});
});
