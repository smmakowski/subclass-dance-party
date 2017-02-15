$(document).ready(function() {
  window.dancers = [];
  var lined = false;
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 3000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(window.dancers);
  });

  $('.line').on('click', function(event) {
    var $dancer = $('.dancer');

    jQuery.each($dancer, function() {
      $dancer.css({'top': '30%'});
    });
  });

  $(document).on('click', '.dancer', function(event) {
    $(this).remove();
  });

  $(document).on('mouseover', '.dancer', function(event) {
    $(this).siblings().css({'left': $(this).css('left')});

    // variable for this dancer's left position
    // compare this dancer's left to other dancers' left
    // find closest left
    // make this dancer's left equal to closest left
  });


});



// makeDancer.prototype.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//   var styleSettings = {
//     top: this.top,
//     left: this.left
//   };
//   this.$node.css(styleSettings);
// };