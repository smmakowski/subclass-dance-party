var makeTwistyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step;
  this.step = function(top, left, timeBetweenSteps) {
// call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};


twistyDancer.prototype = Object.create(twistyDancer.prototype);
twistyDancer.prototype.constructor = twistyDancer;