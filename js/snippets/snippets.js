//----------------------
//	RIMO'S JS SNIPPETS
//----------------------

//------------------------
// Dialog box with fade in

	$(/* A */).dialog({
		autoOpen: false,
		show: {
			duration: /* duration here */
		},
		hide: {
			duration: /* duration here */
		}
	});

	// Element that opens dialog box

	$(/* B */).click(function(){
		$(/* A */).dialog('open');
	});

//---------------------------------------------------------------
// Click one element to slide to top of another element on screen

	$(/* A */).click(function() {
		$('html,body').animate({
		   scrollTop: $(/* B */).offset().top
		});
	});

//----------------------------------------------------
// Insert new value property into input[type="submit"]

	$(/* A */).click(function() {
    	$(this).val(/*'New Value'*/);
    })

//-------------------------------
// Delay the firing of a function

	$(/* A */).click(function() {
		setTimeout(function() {	
			// Code
		}, /* Time in milliseconds here */ );
	});

//-------------------------
// Replace placeholder text

	$(/* A */).click(function() {
    	$(/* Field */).attr("placeholder", /* New Text */);
    })

//--------------------------------
// Fire functions on window resize


    $(window).resize(function(){	
		if ($(/* A */).css(/*"property"*/) == /*"value"*/ ){
			// your code here
		}
	});

//-----------------------------------------------------------------
// Click outside of div (menu or modal) to fade it away / remove it

$(document).mouseup(function (e)
	{
	    var container = $(/* A */);

	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        container.fadeOut();
	    }
	});


//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
