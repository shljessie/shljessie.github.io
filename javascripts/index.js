new p5(function(p) {
  var t = 0;
  var d = 250;

  p.setup = function() {
    var canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    p.stroke(p.color('lightblue'), 120);
    p.noFill();
    p.frameRate(20);
  }

  p.draw = function() {
    p.background(255, 15);
    p.beginShape();
    for (var i = -1; i <= d; i++) {
      var x = p.map(i, 0, d, 0, p.width);
      var y = p.map(p.noise(i * 0.01, t * 0.005), 0, 1, 0, p.height) + p.map(i, 0, d, -p.height/4, p.height/2);
      p.curveVertex(x, y);
    }
    p.endShape(p.OPEN);

    t += 1;
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
}, document.querySelector('body'));

