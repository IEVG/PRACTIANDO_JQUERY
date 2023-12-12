$(document).ready(function () {
	$('#hide').click(function () {
		$('p').hide(3000, () => console.log('se oculto!')); //el callback -- tambien es opcional y se dispará por cada segundo del speed
	});
	$('#show').click(function () {
		$('p').show(1000);
	});

	//usamos el metodo toggle() para ocultar y mostrar elementos
	$('#toggle').click(function () {
		$('.hide-show').toggle();
		$('.hide-show').toggle(2000, () =>
			console.log('se oculto y se mostro!')
		); //el speed--800 es opcional
	});
});
