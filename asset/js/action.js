 	$("#pick-one").click(function()
	{
	$("#radio-action-1").css('display', 'block');
	$("#radio-action-2").css('display', 'block');
	$("#radio-action-3").css('display', 'block');
	$("#radio-action-4").css('display', 'block');
	$("#radio-action-5").css('display', 'block');
	$("#radio-action-6").css('display', 'block');

	$("#check-action-1").css('display', 'none');
	$("#check-action-2").css('display', 'none');
	$("#check-action-3").css('display', 'none');
	$("#check-action-4").css('display', 'none');
	$("#check-action-5").css('display', 'none');
	$("#check-action-6").css('display', 'none');

	$("#pick-one-action").prop('checked', true)
	$("#pick-multiple-action").prop('checked', false)
	});

	$("#pick-pultiple").click(function()
	{
	$("#radio-action-1").css('display', 'none');
	$("#radio-action-2").css('display', 'none');
	$("#radio-action-3").css('display', 'none');
	$("#radio-action-4").css('display', 'none');
	$("#radio-action-5").css('display', 'none');
	$("#radio-action-6").css('display', 'none');
	$("#check-action-1").css('display', 'block');
	$("#check-action-2").css('display', 'block');
	$("#check-action-3").css('display', 'block');
	$("#check-action-4").css('display', 'block');
	$("#check-action-5").css('display', 'block');
	$("#check-action-6").css('display', 'block');

		$("#pick-one-action").prop('checked', false)
		$("#pick-multiple-action").prop('checked', true)

	});

	$(".new-option-1").click(function()
	{
		$("#answer-5").css("display","block");
		$(this).css("display","none");
		$(".new-option-2").css("display","block");
	});

	$(".new-option-2").click(function()
	{
		$("#answer-6").css("display","block");


	});

	













	var del = document.getElementById("delete");
							$(".isue").click(function()
							{
							
								if (del.checked) {
								$(this).parent().parent().parent().css('display', 'none');
								}
								else
								{
									$(this).parent().parent().parent().css('display', 'block');
									window.alert("asjasoidoasdoho");
								}
							});




$(document).ready(function() {
var answera="answer one goes here";
var answerb="answer two goes here";
var answerc="answer three goes here";
var answerd="answer four goes here";
var answere="answer five goes here";
var answerf="answer six goes here";
//this for remove value
$('#survey-name:selected').remove();
$("#textarea").val('');
$("#text-1").val('');
$("#text-2").val('');
$("#text-3").val('');
$("#text-4").val('');
$("#text-5").val('');
$("#text-6").val('');
$("#text-6").val('');
//this for showing placeholder

$("#survey-name").attr('placeholder','Dropdown menu editable');
$("#textarea").attr('placeholder','Question goes here');
$("#text-1").attr('placeholder',answera);
$("#text-2").attr('placeholder',answerb);
$("#text-3").attr('placeholder',answerc);
$("#text-4").attr('placeholder',answerd);
$("#text-5").attr('placeholder',answere);
$("#text-6").attr('placeholder',answerf);
});

new_action();

function new_action() {
	$("#radio").css("display","block").css('opcity', '1');
}

function check() {



}


$("#newquestion").click(function() {

$("#right-mode").clone().appendTo("#canvas");

$("#right-mode").removeAttr('id')
$("#answer-1").removeAttr('id')
$("#answer-2").removeAttr('id')
$("#answer-3").removeAttr('id')
$("#answer-4").removeAttr('id')
$("#answer-5").removeAttr('id')
$("#answer-6").removeAttr('id')

$("#answer-1").css('display', 'block');
$("#answer-2").css('display', 'block');
$("#answer-3").css('display', 'block');
$("#answer-4").css('display', 'block');
$("#answer-5").css('display', 'none');
$("#answer-6").css('display', 'none');

$("#survey-name").removeAttr('id');
$("#textarea").removeAttr('id')
$("#text-1").removeAttr('id')
$("#text-2").removeAttr('id')
$("#text-3").removeAttr('id')
$("#text-4").removeAttr('id')
$("#text-5").removeAttr('id')
$("#text-6").removeAttr('id')





$("#survey-name").attr('disabled', false);
$("#textarea").attr('disabled', false);
$("#text-1").attr('disabled', false);
$("#text-2").attr('disabled', false);
$("#text-3").attr('disabled', false);
$("#text-4").attr('disabled', false);
$("#text-5").attr('disabled', false);
$("#text-6").attr('disabled', false);

//this for unckecking rdio button


	$("#radio-1").removeAttr('id')
	$("#check-1").removeAttr('id')
	$("#radio-2").removeAttr('id')
	$("#check-2").removeAttr('id')
	$("#radio-3").removeAttr('id')
	$("#check-3").removeAttr('id')
	$("#radio-4").removeAttr('id')
	$("#check-4").removeAttr('id')
	$("#radio-5").removeAttr('id')
	$("#check-5").removeAttr('id')
	$("#radio-6").removeAttr('id')
	$("#check-6").removeAttr('id')



		//this for disapaled ti fistr condition
	$("#radio-1").prop('checked', false);
	$("#check-1").prop('checked', false);
	$("#radio-2").prop('checked', false);
	$("#check-2").prop('checked', false);
	$("#radio-3").prop('checked', false);
	$("#check-3").prop('checked', false);
	$("#radio-4").prop('checked', false);
	$("#check-4").prop('checked', false);
	$("#radio-5").prop('checked', false);
	$("#check-5").prop('checked', false);
	$("#radio-6").prop('checked', false);
	$("#check-6").prop('checked', false);
	$("#delete").prop('checked', false)



	









var answera="answer one goes here";
var answerb="answer two goes here";
var answerc="answer three goes here";
var answerd="answer four goes here";
var answere="answer five goes here";
var answerf="answer six goes here";
//this for remove value
$('#survey-name:selected').remove();
$("#textarea").val('');
$("#text-1").val('');
$("#text-2").val('');
$("#text-3").val('');
$("#text-4").val('');
$("#text-5").val('');
$("#text-6").val('');
$("#text-6").val('');
//this for hide answere 5 and 6
$("#answer-5").css("display","none");
$("#answer-6").css("display","none");
//this for showing placeholder
$("#survey-name").attr('placeholder','Dropdown menu editable');
$("#textarea").attr('placeholder','Question goes here');
$("#text-1").attr('placeholder',answera);
$("#text-2").attr('placeholder',answerb);
$("#text-3").attr('placeholder',answerc);
$("#text-4").attr('placeholder',answerd);
$("#text-5").attr('placeholder',answere);
$("#text-6").attr('placeholder',answerf);





$(this).css('display', 'none');

$("#modif").css('display', 'none');
$("#save").css('display', 'block');
$("#new-option-u").css('display', 'block');
$("#publish").css('display', 'block');

$("#answer-5").css('display', 'none');
$("#answer-6").css('display', 'none');







$("#radio-1").attr('disabled', false);
$("#radio-2").attr('disabled', false);
$("#radio-3").attr('disabled', false);
$("#radio-4").attr('disabled', false);
$("#radio-5").attr('disabled', false);
$("#radio-6").attr('disabled', false);
$("#check-1").attr('disabled', false);
$("#check-2").attr('disabled', false);
$("#check-3").attr('disabled', false);
$("#check-4").attr('disabled', false);
$("#check-5").attr('disabled', false);
$("#check-6").attr('disabled', false);










if ($("#pick-one-action").prop('checked')    ) {

	

	$("#radio-action-1").css('display', 'block');
	$("#radio-action-2").css('display', 'block');
	$("#radio-action-3").css('display', 'block');
	$("#radio-action-4").css('display', 'block');
	$("#radio-action-5").css('display', 'block');
	$("#radio-action-6").css('display', 'block');
	$("#check-action-1").css('display', 'none');
	$("#check-action-2").css('display', 'none');
	$("#check-action-3").css('display', 'none');
	$("#check-action-4").css('display', 'none');
	$("#check-action-5").css('display', 'none');
	$("#check-action-6").css('display', 'none');
}
else if ($("#pick-multiple-action").prop('checked') )
{
	$("#radio-action-1").css('display', 'none');
	$("#radio-action-2").css('display', 'none');
	$("#radio-action-3").css('display', 'none');
	$("#radio-action-4").css('display', 'none');
	$("#radio-action-5").css('display', 'none');
	$("#radio-action-6").css('display', 'none');
	$("#check-action-1").css('display', 'block');
	$("#check-action-2").css('display', 'block');
	$("#check-action-3").css('display', 'block');
	$("#check-action-4").css('display', 'block');
	$("#check-action-5").css('display', 'block');
	$("#check-action-6").css('display', 'block');
}










	$("#radio-action-1").removeAttr('id');
	$("#radio-action-2").removeAttr('id');
	$("#radio-action-3").removeAttr('id');
	$("#radio-action-4").removeAttr('id');
	$("#radio-action-5").removeAttr('id');
	$("#radio-action-6").removeAttr('id');
	$("#check-action-1").removeAttr('id');
	$("#check-action-2").removeAttr('id');
	$("#check-action-3").removeAttr('id');
	$("#check-action-4").removeAttr('id');
	$("#check-action-5").removeAttr('id');
	$("#check-action-6").removeAttr('id');













$("#crud").css('display', 'block');
$("#crud").removeAttr('id');
$("#crud").css('display', 'none');

$("#publish").css("display","none");


});

$("#publish-now").click(function(){
	

$("#newquestion").css('display', 'block');

});
//--this for save



$(document).ready(function() {


				$(".input").click(function(event) {
			             /* Act on the event */
	                    $(this).closest('.right-mode').find('.input') .prop('checked', false);
	                   $(this).prop('checked', true);
	                   //$(this).parent().hide()
	                 	});






	

$(".save").click(function(event)
	{
		//$(".input").attr("disabled" , true);
		$(this).css("display","none");
		$("#modif").css("display","block");
		$("#delete").attr("checked",true);
		$("#new-option-u").css("display","none");
		$("#publish").css("display","block");
		$("#publish-u").css("display","block");
		$("#newquestion").css('display', 'block');

	

//this for disable button and input

//this for disabled input 
$("#survey-name").attr('disabled', true);
$("#textarea").attr('disabled', true);
$("#text-1").attr('disabled', true);
$("#text-2").attr('disabled', true);
$("#text-3").attr('disabled', true);
$("#text-4").attr('disabled', true);
$("#text-5").attr('disabled', true);
$("#text-6").attr('disabled', true);

$("#radio-1").attr('disabled', true);
$("#radio-2").attr('disabled', true);
$("#radio-3").attr('disabled', true);
$("#radio-4").attr('disabled', true);
$("#radio-5").attr('disabled', true);
$("#radio-6").attr('disabled', true);
$("#check-1").attr('disabled', true);
$("#check-2").attr('disabled', true);
$("#check-3").attr('disabled', true);
$("#check-4").attr('disabled', true);
$("#check-5").attr('disabled', true);
$("#check-6").attr('disabled', true);


	});

});

//this for crud funtion mode


$(document).ready(function() {
$("#crud").css('display', 'none');

	$(".updated").css('display', 'none');
	


$(document).on("click", ".delete", function() {
  $(this).closest(".right-mode").remove();
});





$(document).on("click", ".edit", function() {
  $(this).closest(".right-mode").find('textarea').attr('disabled', false); 
  $(this).closest(".right-mode").find('input').attr('disabled', false); 
  $(this).closest(".right-mode").find('select').attr('disabled', false);
  $(this).parent().css('display', 'none'); 
  $(this).parent().parent().find('.updated').css('display', 'block');
});



$(document).on("click", ".update", function() {
  $(this).closest(".right-mode").find('textarea').attr('disabled', true); 
  $(this).closest(".right-mode").find('input').attr('disabled', true); 
  $(this).closest(".right-mode").find('select').attr('disabled', true);
  $(this).parent().css('display', 'none'); 
  $(this).parent().parent().find('.edited').css('display', 'block');
});




});