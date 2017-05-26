$(function() {
  smoothScrool(800);
  workBelt();
  workLoad();
  $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
  $("#biglink").fitText(1, { minFontSize: '30px', maxFontSize: '72px' });
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
      console.log('dziala 1');
      $('.work-container').show();
    });

    $('.work-return').click(function () {
    
      //$('.work-belt').css('left', '0%');
      $('.work-belt').removeClass("slided"); //hardware improvement
      console.log('dziala 2');
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