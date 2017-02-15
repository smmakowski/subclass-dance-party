describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  it('ADDL: should store top and left in properties', function() {
    expect(blinkyDancer.left).to.be.equal(20);
    expect(blinkyDancer.top).to.be.equal(10);
  });

  it('ADDL: blinkyDancer should propend node of class dancer to body', function() {
    expect(blinkyDancer.$node.attr('class')).to.be.equal('dancer');
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});


/*
describe('twistyDancer', function() {

  var twistyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    twistyDancer = new makeTwistyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(twistyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node twist', function() {
    sinon.spy(twistyDancer.$node, 'toggle');
    twistyDancer.step();
    expect(twistyDancer.$node.toggle.called).to.be.true;
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(twistyDancer, 'step');
      expect(twistyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(twistyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(twistyDancer.step.callCount).to.be.equal(2);
    });
  });
});

*/