// Hide Header on on scroll down
$(document).ready(function(){
    //Scrolling menu on top
   /* var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('main-menu animated fadeInDown').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('main-menu');
            }
        }
        
        lastScrollTop = st;
    }
	*/

/*==========

  Start TYPED.JS

  =========== */

var typed = new Typed(".typed", {

	//strings: ["work1.", "work2.", "work3.", "work4."],

	strings: ["interactions.", "experiences.", "processes.", "products."],

	// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)

	stringsElement: null,

	// typing speed

	typeSpeed: 80,

	// time before typing starts

	startDelay: 1200,

	// backspacing speed

	backSpeed: 40,

	// time before backspacing

	backDelay: 500,

	//only backspace what doesn't match the previous string

	smartBackspace: true,

	// loop

	loop: true,

	// show cursor

	showCursor: true,

	// character for cursor

	cursorChar: "|",

	// attribute to type (null == text)

	attr: null,

	// either html or text

	contentType: 'html',

	// call when done callback function

	callback: function() {},

	// starting callback function before each string

	preStringTyped: function() {},

	//callback for every typed string

	onStringTyped: function() {},

	// callback for reset

	resetCallback: function() {}

});



/*==========

End TYPED.JS

=========== */


	//Progress Bar W3
	
	

    
    //Progress bar
//
//    var getMax = function(){
//        return $(document).height() - $(window).height();
//    }
//    
//    var getValue = function(){
//        return $(window).scrollTop();
//    }
//    
//    if('max' in document.createElement('progress')){
//        // Browser supports progress element
//        var progressBar = $('progress');
//        
//        // Set the Max attr for the first time
//        progressBar.attr({ max: getMax() });
//
//        $(document).on('scroll', function(){
//            // On scroll only Value attr needs to be calculated
//            progressBar.attr({ value: getValue() });
//        });
//      
//        $(window).resize(function(){
//            // On resize, both Max/Value attr needs to be calculated
//            progressBar.attr({ max: getMax(), value: getValue() });
//        });   
//    }
//    else {
//        var progressBar = $('.progress-bar'), 
//            max = getMax(), 
//            value, width;
//        
//        var getWidth = function(){
//            // Calculate width in percentage
//            value = getValue();            
//            width = (value/max) * 100;
//            width = width + '%';
//            return width;
//        }
//        
//        var setWidth = function(){
//            progressBar.css({ width: getWidth() });
//        }
//        
//        $(document).on('scroll', setWidth);
//        $(window).on('resize', function(){
//            // Need to reset the Max attr
//            max = getMax();
//            setWidth();
//        });
//    }

   
});

