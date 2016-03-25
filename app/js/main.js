import Clock from './Clock';

(function(){
  var ctx     = document.getElementById('canvas').getContext('2d');
  var clock   = new Clock(ctx);

  window.requestAnimationFrame(() => {
    clock.draw()
  });

})();