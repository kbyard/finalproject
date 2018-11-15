$(document).ready(function() {
  var counter = 1;
  var letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "_"
  ];

  var $snap = $("#snap"),
    $liveSnap = $("#liveSnap"),
    $container = $("#letterContainer"),
    gridWidth = 200,
    gridHeight = 100,
    gridRows = 6,
    gridColumns = 7,
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
        border: "1px none #454545",
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

  // console.clear(); //Clear the Console on start of the page
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////HUE/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //This knob controls the "hue" or general color of our colored fridge magnets
  Draggable.create("#hueKnob", {
    type: "rotation",
    throwProps: true,
    onDrag: function() {
      console.log(this.endRotation);
      let hue = this.endRotation / 100
      TweenLite.to(".box", 0, {
        color: "hsl(+=" + hue + ", +=0%, +=0%)",
        ease: Linear.easeNone,
        delay: 0.4
      });
      TweenLite.to(".ReactPiano__Key--natural", 0, {
        backgroundColor: "hsl(+=" + hue + ", +=0%, +=0%)",
        ease: Linear.easeNone,
        delay: 0.4
      });   
    },
  });
  //This is the button that logs the angle value of the knob turns. This data can be used for the person later to get a general sense of what color turns work best for them
  $("#Hue").click(function() {
    console.log(
      document.getElementById("hueKnob")._gsTransform.rotation,
      "from element"
    );
    console.log(Draggable.get("#hueKnob").endRotation, "from Draggable.get()");
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////SATURATION//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Draggable.create("#saturationKnob", {
  type: "rotation",
  throwProps: true,
  onDrag: function() {
    console.log(this.rotation);
    TweenLite.to(".box", 0, {
      color: "hsl(+=0%, +=" + this.rotation/100 + ", +=0%)",
      ease: Linear.easeNone,
      delay: 0.0
    });
    TweenLite.to(".ReactPiano__Key--natural", 0, {
      backgroundColor: "hsl(+=0%, +=" + this.rotation/100 + ", +=0%)",
      ease: Linear.easeNone,
      delay: 0.4
    });   
  }
});
//This is the button that logs the angle value of the knob turns. This data can be used for the person later to get a general sense of what color turns work best for them
$("#Saturation").click(function() {
  console.log(
    document.getElementById("saturationKnob")._gsTransform.rotation,
    "from element"
  );
  console.log(Draggable.get("#saturationKnob").rotation, "from Draggable.get()");
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////LIGHTNESS///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Draggable.create("#lightnessKnob", {
  type: "rotation",
  throwProps: true,
  onDrag: function() {
    console.log(this.rotation);
    TweenLite.to(".box", 0, {
      color: "hsl(+=0%, +=0%, +=" + this.rotation/10 + ")",
      ease: Linear.easeNone,
      delay: 0.0
    });
    TweenLite.to(".ReactPiano__Key--natural", 0, {
      backgroundColor: "hsl(+=0%, +=0%, +=" + this.rotation/10 + ")",
      ease: Linear.easeNone,
      delay: 0.4
    });   
  },
  
});
//This is the button that logs the angle value of the knob turns. This data can be used for the person later to get a general sense of what color turns work best for them
$("#Lightness").click(function() {
  console.log(
    document.getElementById("lightnessKnob")._gsTransform.rotation,
    "from element"
  );
  console.log(Draggable.get("#lightnessKnob").rotation, "from Draggable.get()");
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
  } //end of update function

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
  } //end of applySnap function
  for (var i = 0; i < letters.length; i++) {
    // Inside the loop...

    // 2. Create a variable named "letterBtn" equal to $("<button>");
    var letterBtn = $("<button>");

    // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
    letterBtn.addClass("letter-button letter letter-button-color");

    // 4. Then give each "letterBtn" a data-attribute called "data-letter".
    letterBtn.attr("data-letter", letters[i]);

    // 5. Then give each "letterBtns" a text equal to "letters[i]".
    letterBtn.text(letters[i]);

    // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
    $("#buttons").append(letterBtn);
  } //end of button for loop

  $(".letter-button").on("click", function() {
    // Inside the on-click event...

    // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.
    var fridgeMagnet = $("<div>");

    // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
    fridgeMagnet.addClass("box");

    // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
    // attr acts as both a setter and a getter for attributes depending on whether we supply one argument or two
    // NOTE: There IS a $(data) jQuery method, but it doesn't do what you'd expect. So just use attr.
    fridgeMagnet.text($(this).attr("data-letter"));

    fridgeMagnet.attr("id", counter++);

    fridgeMagnet.css({ color: getRandomColor() });

    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
    // Again you can see we use that find, and once its found we append the item
    $("#letterContainer").append(fridgeMagnet);

    //when the person toggles one of the "snap" modes, make the necessary updates...
    // $snap.on("change", applySnap);
    // $liveSnap.on("change", applySnap);

    // function applySnap() {
    //   if ($snap.prop("checked") || $liveSnap.prop("checked")) {
    //     $(".box").each(function(index, element) {
    //       TweenLite.to(element, 0.5, {
    //         x: Math.round(element._gsTransform.x / gridWidth) * gridWidth,
    //         y: Math.round(element._gsTransform.y / gridHeight) * gridHeight,
    //         delay: 0.1,
    //         ease: Power2.easeInOut
    //       });
    //     });
    //   }
    // }
    update();
  });
  update();
}); //end of document ready
