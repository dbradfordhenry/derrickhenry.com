$(document).ready(function() {

$('.in-page a').on('click', function(e){
	e.preventDefault();
	
	var pageRef = $(this).attr('href');
	callPage(pageRef);
});

function callPage(pageToLoad){
	$.ajax({
		url: pageToLoad,
		type: "GET",
		 dataType : 'text',
     
        success: function( response ) {
          console.log('the page was loaded', response);
      
          $('.content').html(response);
         
        },
     
        error: function( error ) {
          console.log('the page was NOT loaded', error);
        },
     
        complete: function( xhr, status ) {
          console.log("The request is complete!");
        }
    });    
   }
});