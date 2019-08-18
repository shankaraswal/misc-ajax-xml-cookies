$(document).ready(function () {
		$.ajax({
			type: "GET",
			url: "mydata.xml",
			cache: true,
			dataType: ($.browser.msie) ? "text" : "xml",
			success: function(data){
			//alert('asd');
			 var xml;
				   if (typeof data == "string") {
					   xml = new ActiveXObject("Microsoft.XMLDOM");
					   xml.async = false;
					   
					   xml.loadXML(data);
				   }
				   else {
					   
					   xml = data;
				   }   
				   xmlParser(xml);
				  }
		  });
	  
			$(".reviewTab li:first").addClass('act');
			
			
			
			$('.reviewTab li').live('click', function (){
				var $id = $(this).closest('div');
				 var ss = $id.find(".reviewTab li").index(this);
					$id.find(".reviewTab li").removeClass();
					$(this).addClass('act');
					
					//$id.find(".reviewCont .carCont").hide();
					var curCar = $id.find(".reviewCont .carCont").eq(ss).html();
					//alert(curCar);
					$("#aswal").empty();
					$('#aswal').append(' <ul class="shan" id="shan"></ul>');
					$("#shan").append(curCar);	
					
					$('#shan').bxSlider({
						infiniteLoop : false,
						displaySlideQty: 3,
						speed : 500, 
						moveSlideQty: 1
						});
					
				});
		
			});

function xmlParser(xml) {
		var count = 0;
	   $(xml).find("review").each(function () {
	  	var $review = $(this);
		var tab = $review.find('title').text();
		$("#reviewTab").append('<li>'+tab+'</li>');
		
		$("#reviewCont").append('<ul class="carCont appendClr" id="carCont'+count+'"></ul>');	
		//alert($review.find('books').length);
		
		 $review.find('books').each(function(){
			 var x = $(this).find("booktitle").text();
			
			 $("#carCont"+count).append('<li>'+x+'</li>');	

		});
		count = count+1;
		});
		
		$('#reviewCont .carCont:first').show();
		
		var hh = $(".reviewCont .carCont").eq(0).html();	
			//alert(hh);
			$('#shan').append(hh);	
			$('#shan').bxSlider({
				infiniteLoop : false,
				displaySlideQty: 3,
				speed : 500, 
				moveSlideQty: 1
				});
							
		}
