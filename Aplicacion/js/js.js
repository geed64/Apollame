$(document).ready(function() {
						   
	/*var hash = window.location.hash.substr(1);
	var href = $('#nav li a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #content';
			$('#content').load(toLoad)
		}											
	});*/

	/*$('#nav li a').click(function(){
								  
		var toLoad = $(this).attr('href')+' #content';
		$('#content').hide('fast',loadContent);
		$('#load').remove();
		$('#wrapper').append('<span id="load">Cargando...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('#content').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
		
	});*/
	
	/*$('#welcomeLanguage a').click(function(){								  
		lang = $(this).attr("id");
		var animateDiv = $("#animateDiv");
		
		animateDiv.fadeOut(1000);
		setTimeout(function(){
			animateDiv.remove();
		},1000);	
		
		/*setTimeout(function(){
			$('#wrapper').append('<span id="load">LOADING...</span>');
			$('#content').hide();
			$('#content').load("intro.html",'',function(){
					$('#content').fadeIn('normal',function(){$('#load').fadeOut('normal');});
				});		
		},1000);
		
		return false;* /	
	});*/
	
	var  opening = function(){
		$("#line1").animate({width:"138px"},1000);
				
		$("#line2").animate({
					right:"-150px",
					width:"400px"
				},1000);

		setTimeout(function (){ 
			$("#miniCircleP, #circle1").animate({opacity:"1"},250);
		},1000);
		
		setTimeout(function(){
			$("#miniCircleA, #circle2").animate({opacity:"1"},250);				
		},1250);
		
		setTimeout(function(){
			$("#miniCircleI, #circle3").animate({opacity:"1"},250);				
		},1500);
		
		setTimeout(function(){
			$("#titleApollame").animate({opacity:"1"},1000);
		},1750);
		
		setTimeout(function() {
			var welcomeLanguage = $("#welcomeLanguage");
			
			welcomeLanguage.css({display:"block"});
			welcomeLanguage.animate({opacity:"1"},500);
		},2750);
	};
	opening();
});