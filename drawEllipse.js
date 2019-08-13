//print('Добрый день!!!');



window.onload = function(){
  var canvas = document.getElementById('logotip');
  var ctx = canvas.getContext('2d');
  ctx.strokeRect(0,0,151,85);
  cords = [50, 50];
  sizes = [30, 15];
 
 
  drawEllipseParam(ctx, cords, sizes, 45, 51);



  function drawEllipseParam(ctx, cords, sizes, angle, segments){
    ctx.save();
    ctx.translate(cords[0], cords[1]);
    ctx.rotate(angle);
    ctx.beginPath();

    var x, y, firstTime=true;
    var dt = 2 * Math.PI / segments;
    for (var t = 0; t < 2 * Math.PI; t += dt) {
      x = sizes[0] * Math.cos(t);
      y = sizes[1] * Math.sin(t);
      if (firstTime) {
        firstTime = false;
        ctx.moveTo(x, y);

      } else {
        ctx.lineTo(x, y);
      }
    }
  }
  ctx.strokeStyle = 'blue';
  ctx.stroke();
  ctx.closePath();

  ctx.restore();
}