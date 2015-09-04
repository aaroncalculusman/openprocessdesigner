function opd(canvas) {


  var stage = new createjs.Stage(canvas);  
  stage.mouseMoveOutside = true;

  // Add a grid
  var gridShape = new createjs.Shape();

  for(var x=0; x<1000; x+=100) {
    gridShape.graphics
      .beginStroke("#0066ff")
      .moveTo(x, 0)
      .lineTo(x, 1000);
  }
  for(var y=0; y<1000; y+=100) {
    gridShape.graphics
      .beginStroke("#0066ff")
      .moveTo(0, y)
      .lineTo(1000, y);
  }

  stage.addChild(gridShape);

  var stageMousedownPosition;
  var stageMousemovePosition;

  window.addEventListener("wheel", function(event) {
    if(event.ctrlKey) {
      event.preventDefault();
      stage.scaleX /= Math.exp(event.deltaY/500);
      stage.scaleY /= Math.exp(event.deltaY/500);
    }
    else {
      stage.x -= event.deltaX;
      stage.y -= event.deltaY;
    }
    stage.update(); 
  });

  stage.on("stagemousedown", function(event) {
    stageMousedownPosition = {x: event.stageX, y: event.stageY};
    stageMousemovePosition = {x: event.stageX, y: event.stageY};
  });

  stage.on("stagemousemove", function(event) {
    if(stageMousedownPosition) {
      var deltaX = event.stageX - stageMousemovePosition.x;
      var deltaY = event.stageY - stageMousemovePosition.y;
      stage.x += deltaX;
      stage.y += deltaY;
      stage.update();
    }
    stageMousemovePosition = {x: event.stageX, y: event.stageY};
  });

  stage.on("stagemouseup", function(event) {
    stageMousedownPosition = null;
    stageMousemovePosition = null;
  });
    

  var circle = new createjs.Shape();
  circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
  circle.x = 100;
  circle.y = 100;
  stage.addChild(circle);

  stage.update();

  // resize the canvas to fill browser window dynamically
  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stage.update();
  }
  resizeCanvas();
}

