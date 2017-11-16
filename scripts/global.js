 // Highlight sub-navigation
//$(function() {
//  $('#sub-nav ul ul').hide();
//  var path = location.pathname.substring(1);
//  $('#sub-nav a[@href$="' + path + '"]').addClass('current').siblings("ul").slideDown();
//  $('#sub-nav [@href$="' + path + '"]').parents("ul").show();
//});

// Quicklinks (jQuery toggle)
$(function() {
		// run the currently selected effect
		function runEffect() {
			// get effect type from 
			var selectedEffect = $( "#effectTypes" ).val();
			
			// most effect types need no options passed by default
			var options = {};
			// some effects have required parameters
			if ( selectedEffect === "scale" ) {
				options = { percent: 0 };
			} else if ( selectedEffect === "size" ) {
				options = { to: { width: 200, height: 60 } };
			}
			
			// run the effect
			$( "#effect" ).toggle( selectedEffect, options, 500 );
		};
		
		// set effect from select menu value
		$( "#button" ).click(function() {
			runEffect();
			return false;
		});
		
		$('#sub-nav ul ul').show();
		
		
	});

// Search field
$('#q').click(function() {
		  if (($('#q').val() == "Search")||($('#q').val() == "")) {
			$('#q').val("");
			$('#q').css("color","#000000");
			return false;
		  }
		 });
		 
window.addEvent('domready', function() { 
		var accordion = new Accordion($$('.toggler'),$$('.element'), 
			{
			onActive: function(toggler) { toggler.setStyle('color', '#000'); 
			toggler.removeClass('closeArrow').addClass('openArrow');
			},
			
			onBackground: function(toggler) { toggler.setStyle('color', '#000'); 
			toggler.removeClass('openArrow').addClass('closeArrow');
			}
		});
	});		 