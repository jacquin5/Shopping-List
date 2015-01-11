function addListItem() {
	var text = $('#input_item').val();
	
	$('.listed_input').append("<p><img src='img/checkmark.png' class='checkmark' id='check'> "+text+" <button class='delete'>X</button></p>");
	$('#input_item').val('');
}


function deleteListItem() {

	$(this).parent().remove();

}

function finishedItem() {
	if ( $(this).parent().css('textDecoration') == 'line-through' ) {
		$(this).parent().css('textDecoration', 'none');
	} else {
		$(this).parent().css('textDecoration', 'line-through');
		$(this).hide();
		$('#dlete').show();
	}
}

$(document).ready(function() {

	$('#add_value').on('click', addListItem);
	
	$(document).on('click', '.delete', deleteListItem);
	$(document).on('click', '.checkmark', finishedItem);

	$("#input_item").keypress(function(event) {
		if (event.which==13) {
			var text = $('#input_item').val();
			$('.listed_input').append("<p><img src='img/checkmark.png' class='checkmark' id='check'> "+text+" <button class='delete'>X</button></p>");
			$('#input_item').val('');
		}
	});

	

});