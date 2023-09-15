/*
	WEB 303 Assignment 1 - jQuery
	{Muhammed Adwan}
*/
$(document).ready(function(){

function updateAmount () {
	var salary = parseFloat($("#yearly-salary").val() || 0);
	var percent = parseFloat($("#percent").val() || 0);
	var amount = salary * (percent / 100).toFixed(2);
	$("#amount").text("$" + amount);
}

$("#yearly-salary, #percent").on("input", updateAmount);
updateAmount();

});