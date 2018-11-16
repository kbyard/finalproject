var $snap = $("#snap"),
  $liveSnap = $("#liveSnap"),
  $container = $("#container"),
  gridWidth = 196,
  gridHeight = 100,
  gridRows = 6,
  gridColumns = 5,
  i,
  x,
  y;

//loop through and create the grid (a div for each cell). Feel free to tweak the variables above
for (i = 0; i < gridRows * gridColumns; i++) {
  y = Math.floor(i / gridColumns) * gridHeight;
  x = (i * gridWidth) % (gridColumns * gridWidth);
  $("<div/>")
    .css({
      position: "absolute",
      border: "1px solid #454545",
      width: gridWidth - 1,
      height: gridHeight - 1,
      top: y,
      left: x
    })
    .prependTo($container);
}

//set the container's size to match the grid, and ensure that the box widths/heights reflect the variables above
TweenLite.set($container, {
  height: gridRows * gridHeight + 1,
  width: gridColumns * gridWidth + 1
});
TweenLite.set(".box", {
  width: gridWidth,
  height: gridHeight,
  lineHeight: gridHeight + "px"
});

//the update() function is what creates the Draggable according to the options selected (snapping).
function update() {
  var snap = $snap.prop("checked"),
    liveSnap = $liveSnap.prop("checked");
  Draggable.create(".box", {
    bounds: $container,
    edgeResistance: 0.65,
    type: "x,y",
    throwProps: true,
    autoScroll: true,
    liveSnap: liveSnap,
    snap: {
      x: function(endValue) {
        return snap || liveSnap
          ? Math.round(endValue / gridWidth) * gridWidth
          : endValue;
      },
      y: function(endValue) {
        return snap || liveSnap
          ? Math.round(endValue / gridHeight) * gridHeight
          : endValue;
      }
    }
  });
}

// Draggable.create("#knob", {type: "rotation", throwProps: true});

console.clear();

//it doesn't get much easier than this;)
Draggable.create("#knob", {
  type: "rotation",
  throwProps: true,
  onDrag: function() {
    console.log(this.rotation)
    TweenLite.to(".box", 0, {backgroundColor: "hsl(+="+this.rotation+", +=0%, +=0%)", ease:Linear.easeNone, delay:0.0});
  }
});

$("#rotation").click(function() {
  console.log(document.getElementById("knob")._gsTransform.rotation, "from element");
  console.log(Draggable.get("#knob").rotation, "from Draggable.get()");
});

//when the person toggles one of the "snap" modes, make the necessary updates...
$snap.on("change", applySnap);
$liveSnap.on("change", applySnap);

function applySnap() {
  if ($snap.prop("checked") || $liveSnap.prop("checked")) {
    $(".box").each(function(index, element) {
      TweenLite.to(element, 0.5, {
        x: Math.round(element._gsTransform.x / gridWidth) * gridWidth,
        y: Math.round(element._gsTransform.y / gridHeight) * gridHeight,
        delay: 0.1,
        ease: Power2.easeInOut
      });
    });
  }
  update();
}

update();
