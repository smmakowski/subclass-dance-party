var makeTwistyDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeBLinkyDancer.prototype);
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeTwistyDancer.prototype = Object.create(makeDancer.prototype);
makeTwistyDancer.prototype.constructor = makeBlinkyDancer;


makeTwistyDancer.prototype.step = function() {
// call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.html('<img src="assets/twisty.png">').toggleClass('rotate');
  this.$node.slideToggle();
};
