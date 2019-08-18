$(document).ready(function () {
	var a = $.cookie("ss");	
	alert(a);
	if( a == "null" || a == undefined	){
		alert('11');
		$.ajax({
		
			type: "GET",
			url: "news.xml",
			cache: true,
			dataType: ($.browser.msie) ? "text" : "xml",
			
			 beforeSend: function() {
			 // alert('before');
				},
			  complete: function() {
				   
				//  alert('complete');
			  },
			error:function(data){
				//alert('Error fetching content')
				},
		
		
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
	  
	  } else{
	  	alert('22');
	  	$("#ticker").html(a);
		var count= $("#ticker").find('li').length;
	  	alert(count);
		

		$('#ticker').bxSlider({
			ticker: true,
			tickerSpeed : count*500
		});
		alert('3');
	  }	
});

function xmlParser(xml) {
	var xmlData="";
    $('#load').fadeOut();
	var count= 0;
    $(xml).find("news").each(function () {
	  	var $news = $(this);
		count = count+1;
		var newsimgsrc = $news.find('img-src').text();
		var newsdescription = $news.find('news-title').text();
		var newsurl = $news.find('news-url').text();
		//alert('1'+encodeURI('<li class="ss"><span class="newsimg"><img src="'+newsimgsrc+'"></span><a href="'+newsurl+'">'+newsdescription+'</a></li>'))
		
		$("#ticker").append('<li class="ss"><span class="newsimg"><img src="'+newsimgsrc+'"></span><a href="'+newsurl+'">'+newsdescription+'</a></li>');
			xmlData=  $("#ticker").html(); 
			$.cookie("ss", xmlData);
		});
	
	alert(count);
		$('#ticker').bxSlider({
		ticker: true,
		tickerSpeed : count*500
	});
}
