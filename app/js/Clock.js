class Clock {

  constructor(ctx) {
    this.ctx = ctx;
  }
  
  draw(){
    this.ctx.save();
    this.ctx.clearRect(0,0,600,600);
    this.ctx.translate(300, 300);
    this.ctx.rotate(-Math.PI/2);
    // Outer thick circle
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#333";
    this.ctx.lineWidth = 10;
    this.ctx.arc(0, 0, 280, 0, Math.PI*2, false);
    this.ctx.stroke();
    this.ctx.closePath();

    // Outer thin circle
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#333";
    this.ctx.lineWidth = 2;
    this.ctx.arc(0, 0, 260, 0, Math.PI*2, false);
    this.ctx.stroke();
    this.ctx.closePath();

    // Hour mark notches
    this.ctx.lineWidth = 8;
    this.ctx.save();

    for (var i = 1; i <= 12; i++) {
      this.ctx.beginPath();
      this.ctx.rotate( (Math.PI/180) * 360 / 12 );
      this.ctx.moveTo(240,0);
      this.ctx.lineTo(260,0);
      this.ctx.stroke();
    }
    this.ctx.restore();

    // Minute mark notches
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = 'black';
    this.ctx.lineCap = 'round';
    this.ctx.save();

    for (i = 1; i <= 60; i++) {
      this.ctx.rotate( (Math.PI/180) * 360 / 60 );
      
      if (i%5 !== 0) {
        this.ctx.beginPath();
        this.ctx.moveTo(250,0);
        this.ctx.lineTo(260,0);
        this.ctx.stroke();
      }
    }
    this.ctx.restore();

    // Centre circle
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 25, 0, Math.PI*2, false);
    this.ctx.fillStyle = 'white';
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = 'black';
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();

    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();
    hours = hours>=12 ? hours-12 : hours;

    var toRads = function(degs){
      return degs*Math.PI/180;
    };

    // Seconds hand
    this.ctx.save();
    this.ctx.globalCompositeOperation = 'destination-over';
    this.ctx.rotate(seconds * toRads(360/60));
    this.ctx.beginPath();
    this.ctx.moveTo(-40,0);
    this.ctx.lineTo(200, 0);
    this.ctx.stroke();
    this.ctx.restore();

    // Minutes hand
    this.ctx.save();
    this.ctx.globalCompositeOperation = 'destination-over';
    this.ctx.rotate( minutes*toRads(360/60) + (seconds/60)*toRads(360/60) );
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(230, 0);
    this.ctx.stroke();
    this.ctx.restore();

    // Hours hand
    this.ctx.save();
    this.ctx.globalCompositeOperation = 'destination-over';
    this.ctx.rotate( hours*toRads(360/12) + (minutes/60)*toRads(360/60) + (seconds/3600)*toRads(360/60) );
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(215, 0);
    this.ctx.lineWidth = 8;
    this.ctx.stroke();
    this.ctx.restore();

    this.ctx.restore();

    window.requestAnimationFrame(() => {
        this.draw()
    });
  }

}

export default Clock;