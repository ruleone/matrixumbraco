// JavaScript Document

// Panel Flip Animation for IE8 and Below

var panelMargin =$(".panel_img").height()/2;
var panelHeight=$(".panel_img").height();
var panelWidth=$(".panel_img").width();

$(".panel_info").stop().css({height:'0px',width:''+panelWidth+'px',marginTop:''+panelMargin+'px',opacity:'0.5'});

	$(".panel_info").hover(function(){
		$(this).stop().animate({height:'0px',width:''+panelWidth+'px',marginTop:''+panelMargin+'px',opacity:'0.5'},{duration:500});
		window.setTimeout(function() {
		$(".panel_img").stop().animate({height:''+panelHeight+'px',width:''+panelWidth+'px',marginTop:'0px',opacity:'1'},{duration:500});
		},500);
	});