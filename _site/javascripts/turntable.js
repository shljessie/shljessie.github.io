$(document).ready(function() {

  var audible = true;

  $('.turntable-volume').on('click', '.fa-volume-up', function() {
    $(this).removeClass('fa-volume-up').addClass('fa-volume-off');
    audible = false;
    return false;
  });

  $('.turntable-volume').on('click', '.fa-volume-off', function() {
    $(this).removeClass('fa-volume-off').addClass('fa-volume-up');
    audible = true;
    return false;
  });

  $('#rangeInput,#textInput').change(function(e) {
    updateSlider($(this).val());
  });

  /* audio stuff */

  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  if (!audioCtx) {
    alert("Your browser does not support the Web Audio API. Try updating / using Chrome, or make some cool turntable paintings without any sound!");
  }

  var oscillatorGainPool = [];

  function initOscillatorGainPair() {
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    gainNode.gain.value = 0;

    oscillator.type = 'sine';  
    oscillator.frequency.value = 440;
    oscillator.detune.value = 100; // cents
    oscillator.start(0);

    return {
      oscillator: oscillator,
      gainNode: gainNode
    }
  }

  // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  var canvas = document.getElementById( 'canvas' );
  var columnDiv = $('.container > div.row > div');
  var columnOffset = columnDiv.offset();
  var divWidth = columnDiv.width();
  var diameter = Math.min(divWidth, window.innerHeight) - 5;
  canvas.width = divWidth;
  canvas.height = window.innerHeight;

  var ctx = canvas.getContext( '2d' );

  var tempo = document.getElementById('textInput').value || 25; // in rpm

  var queue = [];
  var filter = {};

  var mouse = {x: 0, y: 0};
  var mouseIsDown = false;

  var center = {
    x: canvas.width / 2.0,
    y: canvas.height / 2.0
  }

  function updateSlider(val) {
    tempo = val;
    document.getElementById('textInput').value=val;
    document.getElementById('rangeInput').value=val;
  }

  /* helpers */

  function relativeToCenter(x, y) {
    return {
      x: x - center.x,
      y: y - center.y
    }
  }

  function rotatePoint(x, y, theta) {
    var rel = relativeToCenter(x, y);
    return {
      x: rel.x * Math.cos(theta) - rel.y * Math.sin(theta) + center.x,
      y: rel.x * Math.sin(theta) + rel.y * Math.cos(theta) + center.y
    }
  }

  function distFromCenter(x, y) {
    var rel = relativeToCenter(x, y);
    return Math.sqrt(rel.x * rel.x + rel.y * rel.y);
  }

  function drawLineFromCenterToTop(theta) {
    var rot = rotatePoint(center.x, center.y - diameter / 2.0, theta);
    ctx.strokeStyle = "rgba(0,0,0,0.2)"
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(rot.x, rot.y);
    ctx.stroke();
  }

  function setMouse(e) {
    var point = {
      x: e.pageX - columnOffset.left,
      y: e.pageY - canvas.offsetTop
    }
    var r = distFromCenter(point.x, point.y);
    if (r <= diameter / 2.0)
      mouse = rotatePoint(point.x, point.y, -rotation)
  }

  $(canvas).bind('mousemove touchmove', function(e) {
    setMouse(e);
  });

  $(canvas).bind('mousedown touchstart', function(e) {
    mouseIsDown = true;
    setMouse(e);
  });

  $(canvas).bind('mouseup touchend', function(e) {
    mouseIsDown = false;
  });

  // http://scienceprimer.com/javascript-code-convert-light-wavelength-color

  // takes wavelength in nm and returns an rgba value
  function wavelengthToColor(wavelength) {
    var r,
        g,
        b,
        alpha,
        colorSpace,
        wl = wavelength,
        gamma = 1;


    if (wl >= 380 && wl < 440) {
        R = -1 * (wl - 440) / (440 - 380);
        G = 0;
        B = 1;
   } else if (wl >= 440 && wl < 490) {
       R = 0;
       G = (wl - 440) / (490 - 440);
       B = 1;  
    } else if (wl >= 490 && wl < 510) {
        R = 0;
        G = 1;
        B = -1 * (wl - 510) / (510 - 490);
    } else if (wl >= 510 && wl < 580) {
        R = (wl - 510) / (580 - 510);
        G = 1;
        B = 0;
    } else if (wl >= 580 && wl < 645) {
        R = 1;
        G = -1 * (wl - 645) / (645 - 580);
        B = 0.0;
    } else if (wl >= 645 && wl <= 780) {
        R = 1;
        G = 0;
        B = 0;
    } else {
        R = 0;
        G = 0;
        B = 0;
    }

    // intensty is lower at the edges of the visible spectrum.
    if (wl > 780 || wl < 380) {
        alpha = 0;
    } else if (wl > 700) {
        alpha = (780 - wl) / (780 - 700);
    } else if (wl < 420) {
        alpha = (wl - 380) / (420 - 380);
    } else {
        alpha = 1;
    }

    colorSpace = "rgba(" + (R * 100) + "%," + (G * 100) + "%," + (B * 100) + "%, 1)"
   
    return colorSpace;
   
  }

  /* render some stuff */

  function drawPoint(x, y, hz, playing) {
    ctx.fillStyle = wavelengthToColor(hz);
    ctx.beginPath();
    ctx.arc(x, y, playing ? 50 : 5, 0, 2*Math.PI);
    ctx.fill();
  }

  var rotation = 0;

  // var timeout;

  function render() {
    ctx.translate( center.x, center.y );
    var delta =  2 * Math.PI * tempo / 60 / 60;
    ctx.rotate(delta);
    rotation = (rotation + delta) % (2 * Math.PI);
    ctx.translate( - center.x, - center.y );
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0, len = queue.length; i < len; i++) {
      var point = queue[i];
      var r = distFromCenter(point.x, point.y);
      var wavelength = 780 - r / (diameter / 2) * 400;
      var rot = rotatePoint(point.x, point.y, rotation);
      var rel = relativeToCenter(rot.x, rot.y);
      if (!point.playing && Math.abs(-Math.PI / 2 - Math.atan2(rel.y, rel.x)) < 0.1) {
        point.playing = true;
        var ogp = oscillatorGainPool.shift() || initOscillatorGainPair();
        ogp.oscillator.frequency.value = 780 - wavelength + 100;
        if (audible)
          ogp.gainNode.gain.value = 1;
        // clearTimeout(timeout);
        // timeout = setTimeout(function() {
        //   gainNode.gain.value = 0;
        // }, 200);
        // todo: polyphony, create oscillator pool
        setTimeout((function(ogp, point) {
          point.playing = false;
          ogp.gainNode.gain.value = 0;
          oscillatorGainPool.push(ogp);
        }).bind(undefined, ogp, point), 200);
      }
      drawPoint(point.x, point.y, wavelength, point.playing);
    }

    drawLineFromCenterToTop(-rotation);

    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.arc(center.x, center.y, diameter / 2, 0, 2 * Math.PI);
    ctx.stroke();
  }

  // usage:
  // instead of setInterval(render, 16) ....

  (function animloop(){
    requestAnimFrame(animloop);
    if (mouseIsDown) {
      if (mouse.x || mouse.y) {
        var key = mouse.x.toFixed(2)+" "+mouse.y.toFixed(2);
        if (!filter[key]) {
          filter[key] = true;
          queue.push({ x: mouse.x, y: mouse.y});
        }
      }
    }
    render();
  })();
  // place the rAF *before* the render() to assure as close to
  // 60fps with the setTimeout fallback.


  $('#clear').click(function(e) {
    queue = [];
    filter = {};
    oscillatorGainPool = [];
  });
});