$(document).ready(function() {
	$("span.Internationalization").each(function(index){
		$(this).append(Internationalization[$.cookie("lang")].Intro[this.id]);
	});
});