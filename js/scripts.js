$(function() {
  smoothScrool(800);
  workBelt();
  workLoad();
  $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
  //$("#biglink").fitText(1.2, { minFontSize: '30px', maxFontSize: '72px' });
});

$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});

function smoothScrool (duration) {
  $('a[href^="#"]').on('click', function(event) {
    console.log("działa")
    var target = $( $(this).attr('href') );

    if ( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}

function workBelt () {
  $('.thumb-unit').click(function () {
    
    //$('.work-belt').css('left', '-100%');
    $('.work-belt').addClass("slided"); //hardware improvement
      //console.log('dziala 1');
      $('.work-container').show();
    });

    $('.work-return').click(function () {
    
      //$('.work-belt').css('left', '0%');
      $('.work-belt').removeClass("slided"); //hardware improvement
      //console.log('dziala 2');
      $('.work-container').hide(800);
  });
}

function workLoad() {
  $.ajaxSetup ({ cache: false });

  $('.thumb-unit').click(function() {
    var $this = $(this);
    var newTitle = $this.find('strong').text();
    var newFolder = $this.data('folder');
    var spinner = '<div class="loader">Loading...</div>';
    var newHTML = newFolder;
    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });
}

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );


document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Open minded", "Envolving", "Eager to learn", "{ Open minded // Envolving // Eager to learn }"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h4").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 2000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}
