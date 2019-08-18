// JavaScript Document
$(document).ready(function(){
	$('.afterClr').after('<div class="clr"></div>');
	$('.appendClr').append('<div class="clr"></div>');
	$('.beforeClr').before('<div class="clr"></div>');
	
	$('.cont div.car').hide();
	$('.cont div.car:first').show();
	$(".tabs li:first").addClass('act');
						   
	$('.tabs li').click(function (){
		var $id = $(this).closest('div');
		
		alert($id.attr('id'));
		
		 var ss = $id.find(".tabs li").index(this);
			//alert(ss);
			
			$id.find(".tabs li").removeClass();
			$(this).addClass('act');
			
			$id.find(".cont div.car").slideUp();
				$id.find(".cont div.car").eq(ss).slideDown();
		});
   });

