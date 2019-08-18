$(document).ready(function(){
	$(".afterClr ").after("<div class='clr'></div>");
	$(".beforeClr ").before("<div class='clr'></div>");
	$('.appendClr, .viewForm li, .connListSec .connList').append('<div class="clr"></div>');	


		// by defauld load case 1: first carousel
		$.ajax({
			url:"1.html", 
			success:function(result){
			$("#slideBox").html(result);
			xyz();
			}
		  });
		  $("#leftNav a").click(function(){
			$("#slideList").detach();										 
				var cId =$(this).attr('id');
				switch (cId){
					case "disTech": 
						$.ajax({
							url:"1.html", 
							success:function(result){
							$("#slideBox").html(result);
							xyz();
							}
						  });
						break;
						xyz();

					case "mSol": 
						//alert('2');
						$.ajax({
							url:"2.html", 
							success:function(result){
							$("#slideBox").html(result);
							xyz();
					 		 }
				 	 	});
						break;
						//default: should be case1;
					
					}
		 });
		  
});

	  // after loading xml and appending lis in within ul carousal intialize
	function xyz(){
	var viewSlide =3; 
	var moveSlide =3; 
	
	var sw =$('#slideList li').outerWidth(); 
	var sh = $('#slideList li').height();
	var swl  = $('#slideList li').length;
	var tw  = sw * swl;
	
		$('#slideList').width(tw);
		$('#slideBox').css({
			width:sw*viewSlide
			});
		$('.prev').hide();
		var cw = tw-sw;			
		/**********/
		$('.next').click(function(){
		var sl =$('#slideList');
		var position = sl.position().left;
		//alert('position' + position);
		//alert(cw);
		$('#slideList').animate({
			left: position-(sw*moveSlide),
			}, 500);
				if(cw <= -position+(sw*(moveSlide*2))){
					//alert('a1');
					$('.next').hide();
					
					}
				else{
					//alert('a2');
					$('.prev').show();
					
					}
			});

		
	$('.prev').click(function(){
		var sl =$('#slideList');
		var position = sl.position().left;
			//alert('position' + position);
			//alert('xxx' + cw);
			$('#slideList').animate({
					//opacity: 0.25,
					left: position+(sw*moveSlide),
				  }, 500);
				if((position+(sw*moveSlide)) >= 0){
				//	alert('b1');
					$('.prev').hide();
					}
				else{
					//alert('b2');
					$('.next').show();
					}
		});
	}


 