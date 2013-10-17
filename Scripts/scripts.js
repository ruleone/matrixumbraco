$(document).ready(function () {

    // Detect Mobile Devices
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var browser = 'mobile';
    }


    // Detect IE10
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);
	
	
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
	

    // Adding class for IE10
    var agent = $('html').attr('data-useragent');
    if (agent == 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; MDDRJS)') {
        $("html").addClass("ie ie10");
    }

    if (isChrome || isSafari) { 
        $("html").addClass("webkit");
    }


    // Auto-play Panel Flipper
    //$('html #panel1').not('html.ie #panel1').addClass('hover'); // Flips first panel by default, but not IE10

    var cyclePanels = new (function () {
        var $panels, // An array of panels
        $timeRemaining, // Usually hidden element to display time when paused
        panelId = -1, // Which image is being shown
        incrementTime = 4000, // Pause Duration
        updateTimer = function () {
            $panels.eq(panelId).stop(true, true).removeClass('hover');
            //$ie_panels.eq(panelId).stop(true,true).find('.back').slideDown('slow');
            panelId++;
            if (panelId > $panels.length) {
                panelId = 0; // Resets the Counter when last panel is done.
            }
            $panels.eq(panelId).stop(true, false).addClass('hover'); // Animate the next panel.
            //$ie_panels.eq(panelId).stop(true,true).find('.front').slideUp('slow');
        },
        init = function () {
            $panels = $('.panel');
            //$ie_panels = $('html.ie .panel');
            //$timeRemaining = $('#timeRemaining');
            cyclePanels.Timer = $.timer(updateTimer, incrementTime, true).once();
        };


        // Function to Pause the animation, and remember its state	
        this.panelPause = function () {
            if (this.Timer.isActive) {

                this.Timer.pause();
                //var remaining = this.Timer.remaining / 1000;
                //$timeRemaining.html(remaining + " seconds remaining.");			
            }
            else {
                this.Timer.play();
                //$timeRemaining.html("<br/>");
            }
        };

        if (browser != 'mobile') { // Run only if not mobile
            $(init); // Run the Timer!
        }
    });


    $('.panel').hover(function () { cyclePanels.panelPause(); });



    //////////////////////////////////////////////////////////////////////////////

    //   Fancybox     ------------------------------------------------------------

    $(".fancybox").fancybox();


    //////////////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////////////

    $("#mobile_nav").hide();
    $(".menu_icon").on('click touchstart', function() {
        $("#mobile_nav").slideToggle("slow");
    });
	
	$("a#advantages-link").on('click touchstart', function() {
        $("ul#subnav-advantages").slideToggle("normal");
		$("ul.children:not(ul#subnav-advantages)").slideUp("normal");
    });
	
	$("a#solutions-link").on('click touchstart', function() {
        $("ul#subnav-solutions").slideToggle("normal");
		$("ul.children:not(ul#subnav-solutions)").slideUp("normal");
    });

	$("a#company-link").on('click touchstart', function() {
        $("ul#subnav-company").slideToggle("normal");
		$("ul.children:not(ul#subnav-company)").slideUp("normal");
    });	



    //////////////////////////////////////////////////////////////////////////////

});