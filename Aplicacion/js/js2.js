$(document).ready(function() {
	setTimeout("animation()",300);
});
		
function animation(){
	$("#sun")
		.animate(
			{
				width:"500px"
				//left:"30px" 
			},3000)
		.animate(
			{
				width:"100px"
				//left:"230px" 
			},3000);
		
	setTimeout("animation()",6000);
}