$(document).ready(function(){
	var currentImageId = 0;
	var images = [ //массив из объектов
		{'src': 'css/img/1.jpg'},
		{'src': 'css/img/2.jpg'},
		{'src': 'css/img/3.jpg'},
		{'src': 'css/img/4.jpg'},
		{'src': 'css/img/5.jpg'},
		{'src': 'css/img/6.jpg'},
		{'src': 'css/img/7.jpg'},
		{'src': 'css/img/8.jpg'},
	];

	var imagesBlock = $('#gallery-images'); // выбираем блочек в который будем добавляеть галерею. 

	$.each(images, function(index, element) { //первый аргумент это номер в масиве, второй это сам элемент
		var imageTemplate = '<div class="img span3"><img data-index="' + index + '" src="' + element.src + '"></div>';
		imagesBlock.append($(imageTemplate)); //добавляет в конец кода. По факту, в нутрь блока.
	});

	var lolfunc = function() {
		$('.black').fadeTo(0,.5);
		$('.show-img').show();
		$('.show-img img').attr('src', images[currentImageId].src).show();	
	}
	
	$('.img img').click(function(){
		currentImageId = $(this).data('index'); //определяет, какую фоточку брать. 
		lolfunc();
	});
	
	$('.black').click(function(){
		$(this).hide();
		$('.show-img img').hide();
		$('.show-img').hide();
	});

	$('.show-img img').click(function(){
		if (currentImageId == images.length - 1 ) {
			currentImageId = 0;
		} else {
			currentImageId++;
		}
		lolfunc();
	});

	var lalal;
	
});