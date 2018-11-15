var quiztitle = "Colorblind Test";

/**
 * Set the information about your questions here. The correct answer string needs to match
 * the correct choice exactly, as it does string matching. (case sensitive)
 *
 */
/**
 *Let's create the randomization of the questions!
 */

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

if (!("scramble" in Array.prototype)) {
  Object.defineProperty(Array.prototype, "scramble", {
    enumerable: false,
    value: function() {
      var o,
        i,
        ln = this.length;
      while (ln--) {
        i = (Math.random() * (ln + 1)) | 0;
        o = this[ln];
        this[ln] = this[i];
        this[i] = o;
      }
      return this;
    }
  });
}
var quiz = [
  {
    question: "Q1: What number do you see?",
    image:
      "https://i.imgur.com/JWJMiSC.jpg",
    choices: [
      "7",
      "14",
      "25",
      "57"
    ],
    correct: "7",
    explanation:
      "The number pictured is 7. Those with normal color vision will see this number. The number may be unclear if you are color blind."
  },
  {
    question: "Q2: What number do you see?",
    image:
      "https://i.imgur.com/ae65y2p.jpg",
      choices: [
        "27",
        "57",
        "6",
        "28"
      ],
    correct: "6",
    explanation:
      "The number pictured is 6. Those with normal color vision will see this number. The number may be unclear if you are color blind."
  },
  {
    question: "Q3: What number do you see?",
    image:
      "https://i.imgur.com/6gm5bkl.jpg",
      choices: [
        "6",
        "26",
        "66",
        "2"
      ],
    correct: "26",
    explanation:
      "The number pictured is 26. Those with normal color vision will see this number. Individuals with red color blindness will see the number 6. Individuals with green color blindness might just see the number 2."
  },
  {
    question: "Q4: What number do you see?",
    image:
      "https://i.imgur.com/zyb1Hyy.jpg",
      choices: [
        "69",
        "15",
        "31",
        "17"
      ],
    correct: "15",
    explanation:
      "The number pictured is 15. Those with normal color vision will see this number. Individuals with red green color blindness will see the number 17."
  },
  {
    question: "Q5: What number do you see?",
    image:
      "https://i.imgur.com/NK1MVM1.jpg",
      choices: [
        "6",
        "79",
        "52",
        "9"
      ],
    correct: "6",
    explanation:
      "The number pictured is 6. Those with normal color vision will see this number. The number may be unclear if you are color blind"
  },
  {
    question: "Q6: What number do you see?",
    image:
      "https://i.imgur.com/PFV63Kk.jpg",
      choices: [
        "82",
        "49",
        "73",
        "24"
      ],
    correct: "73",
    explanation:
      "The number pictured is 73. Those with normal color vision will see this number. The number may be unclear if you are color blind"
  },
  {
    question: "Q7: What number do you see?",
    image:
      "https://i.imgur.com/MZ8EEBg.jpg",
      choices: [
        "36",
        "5",
        "25",
        "8"
      ],
    correct: "5",
    explanation:
      "The number pictured is 5. Those with normal color vision will see this number. The number may be unclear if you are color blind"
  },
  {
    question: "Q8: What number do you see?",
    image:
      "https://i.imgur.com/D84klZZ.jpg",
      choices: [
        "62",
        "2",
        "41",
        "16"
      ],
    correct: "16",
    explanation:
      "The number pictured is 16. Those with normal color vision will see this number. The number may be unclear if you are color blind"
  },
  {
    question: "Q9: What number do you see?",
    image:
      "https://i.imgur.com/QrhietF.jpg",
      choices: [
        "35",
        "17",
        "45",
        "65"
      ],
    correct: "45",
    explanation:
      "The number pictured is 45. Those with normal color vision will see this number. The number may be unclear if you are color blind"
  },
  {
    question: "Q10: What number do you see?",
    image:
      "https://i.imgur.com/yg1KyQC.jpg",
      choices: [
        "60",
        "12",
        "17",
        "37"
      ],
    correct: "12",
    explanation:
      "The number pictured is 12. Everyone should see the number 12, including those that are color blind."
  },
  {
    question: "Q11: What number do you see?",
    image:
      "https://i.imgur.com/ix5KUqL.jpg",
      choices: [
        "70",
        "45",
        "29",
        "23"
      ],
    correct: "29",
    explanation:
      "The number pictured is 29. Those with normal color vision will see this number. If you are red-green color blind, you will see the number 70. If you do not see anything, you may have total color blindness."
  },
  {
    question: "Q12: What number do you see?",
    image:
      "https://i.imgur.com/gwq06A9.jpg",
      choices: [
        "48",
        "3",
        "11",
        "8"
      ],
    correct: "8",
    explanation:
      "The number pictured is 8. Those with normal color vision will see this number. If you are red-green color blind, you will see the number 3. If you do not see anything, you may have total color blindness."
  },
  {
    question: "Q13: What number do you see?",
    image:
      "https://i.imgur.com/PG9i1WP.jpg",
      choices: [
        "21",
        "74",
        "51",
        "27"
      ],
    correct: "74",
    explanation:
      "The number pictured is 74. Those with normal color vision will see this number. If you are red-green color blind, you will see the number 21."
  }
];

quiz.forEach(q => q.choices.scramble());
//console.log(quiz[0].choices);

quiz = shuffle(quiz);

/******* No need to edit below this line *********/
var currentquestion = 0,
  score = 0,
  submit = true,
  picked;

jQuery(document).ready(function($) {
  /**
   * HTML Encoding function for alt tags and attributes to prevent messy
   * data appearing inside tag attributes.
   */
  function htmlEncode(value) {
    return $(document.createElement("div"))
      .text(value)
      .html();
  }

  /**
   * This will add the individual choices for each question to the ul#choice-block
   *
   * @param {choices} array The choices from each question
   */
  function addChoices(choices) {
    if (typeof choices !== "undefined" && $.type(choices) == "array") {
      $("#choice-block").empty();
      for (var i = 0; i < choices.length; i++) {
        $(document.createElement("li"))
          .addClass("choice choice-box btn")
          .attr("data-index", i)
          .text(choices[i])
          .appendTo("#choice-block");
      }
    }
  }

  /**
   * Resets all of the fields to prepare for next question
   */
  function nextQuestion() {
    submit = true;
    $("#explanation").empty();
    $("#question").text(quiz[currentquestion]["question"]);
    $("#pager").text(
      "Question " + Number(currentquestion + 1) + " of " + quiz.length
    );
    if (
      quiz[currentquestion].hasOwnProperty("image") &&
      quiz[currentquestion]["image"] != ""
    ) {
      if ($("#question-image").length == 0) {
        $(document.createElement("img"))
          .addClass("question-image")
          .attr("id", "question-image")
          .attr("src", quiz[currentquestion]["image"])
          .attr("alt", htmlEncode(quiz[currentquestion]["question"]))
          .insertAfter("#question");
      } else {
        $("#question-image")
          .attr("src", quiz[currentquestion]["image"])
          .attr("alt", htmlEncode(quiz[currentquestion]["question"]));
      }
    } else {
      $("#question-image").remove();
    }
    addChoices(quiz[currentquestion]["choices"]);
    setupButtons();

    jQuery(document).ready(function($) {
      $("#question").html(function() {
        var text = $(this)
          .text()
          .trim()
          .split(" ");
        var first = text.shift();
        return (
          (text.length > 0
            ? "<span class='number'>" + first + "</span> "
            : first) + text.join(" ")
        );
      });

      $("p.pager").each(function() {
        var text = $(this)
          .text()
          .split(" ");
        if (text.length < 2) return;

        text[1] = '<span class="qnumber">' + text[1] + "</span>";
        $(this).html(text.join(" "));
      });
    });
  }

  /**
   * After a selection is submitted, checks if its the right answer
   *
   * @param {choice} number The li zero-based index of the choice picked
   */
  function processQuestion(choice) {
    if (
      quiz[currentquestion]["choices"][choice] ==
      quiz[currentquestion]["correct"]
    ) {
      $(".choice")
        .eq(choice)
        .addClass("btn-success")
        .css({
          "font-weight": "bold",
          "border-color": "#51a351",
          color: "#fff"
        });
      $("#explanation").html(
        '<span class="correct">CORRECT!</span> ' +
          htmlEncode(quiz[currentquestion]["explanation"])
      );
      score++;
    } else {
      $(".choice")
        .eq(choice)
        .addClass("btn-danger")
        .css({
          "font-weight": "bold",
          "border-color": "#f93939",
          color: "#fff"
        });
      $("#explanation").html(
        '<span class="incorrect">INCORRECT!</span> ' +
          htmlEncode(quiz[currentquestion]["explanation"])
      );
    }
    currentquestion++;

    if (currentquestion == quiz.length) {
      $("#submitbutton")
        .html("GET QUIZ RESULTS")
        .removeClass("btn-success")
        .addClass("btn-info")
        .css({
          "border-color": "#3a87ad",
          color: "#fff"
        })
        .on("click", function() {
          $(this)
            .text("GET QUIZ RESULTS")
            .on("click");
          endQuiz();
        });
    } else if (currentquestion < quiz.length) {
      $("#submitbutton")
        .html("NEXT QUESTION &raquo;")
        .removeClass("btn-success")
        .addClass("btn-warning")
        .css({
          "font-weight": "bold",
          "border-color": "#faa732",
          color: "#fff"
        })
        .on("click", function() {
          $(this)
            .text("- CHECK ANSWER -")
            .removeClass("btn-warning")
            .addClass("btn-success")
            .css({
              "font-weight": "bold",
              "border-color": "#51a351",
              color: "#fff"
            })
            .on("click");
          nextQuestion();
        });
    } else {
      //	$('#submitbutton').html('NEXT QUESTION &raquo;').on('click', function(){
      //		$(this).text('- CHECK ANSWER -').css({'color':'inherit'}).on('click');
      //	})
    }
  }

  /**
   * Sets up the event listeners for each button.
   */
  function setupButtons() {
    $(".choice").on("click", function() {
      picked = $(this).attr("data-index");
      $(".choice")
        .removeAttr("style")
        .off("mouseout mouseover");
      $(this).css({
        "font-weight": "bold",
        "border-color": "#51a351",
        color: "#51a351"
      });
      if (submit) {
        submit = false;
        $("#submitbutton")
          .css({
            color: "#fff",
            cursor: "pointer"
          })
          .on("click", function() {
            $(".choice").off("click");
            $(this).off("click");
            processQuestion(picked);
          });
      }
    });
  }

  /**
   * Quiz ends, display a message.
   */
  function endQuiz() {
    $("#explanation").empty();
    $("#question").empty();
    $("#choice-block").empty();
    $(".question-image").remove();
    $("#submitbutton").remove();
    $(".rsform-block-submit").addClass("show");
    $("#question").text(
      "You got " + score + " out of " + quiz.length + " correct."
    );
    $(document.createElement("h4"))
      .addClass("score")
      .text(Math.round((score / quiz.length) * 100) + "%")
      .insertAfter("#question");
  }

  /**
   * Runs the first time and creates all of the elements for the quiz
   */
  function init() {
    //add title
    if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
      $(document.createElement("h2"))
        .text(quiztitle)
        .appendTo("#frame");
    } else {
      $(document.createElement("h2"))
        .text("Quiz")
        .appendTo("#frame");
    }

    //add pager and questions
    if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
      //add pager
      $(document.createElement("p"))
        .addClass("pager")
        .attr("id", "pager")
        .text("Question 1 of " + quiz.length)
        .appendTo("#frame");
      //add first question
      $(document.createElement("h3"))
        .addClass("question")
        .attr("id", "question")
        .text(quiz[0]["question"])
        .appendTo("#frame");
      //add image if present
      if (quiz[0].hasOwnProperty("image") && quiz[0]["image"] != "") {
        $(document.createElement("img"))
          .addClass("question-image")
          .attr("id", "question-image")
          .attr("src", quiz[0]["image"])
          .attr("alt", htmlEncode(quiz[0]["question"]))
          .appendTo("#frame");
      }

      $(document.createElement("p"))
        .addClass("explanation")
        .attr("id", "explanation")
        .html("")
        .appendTo("#frame");

      //questions holder
      $(document.createElement("ul"))
        .attr("id", "choice-block")
        .appendTo("#frame");

      //add choices
      addChoices(quiz[0]["choices"]);

      //add submit button
      $(document.createElement("div"))
        .addClass("btn-success choice-box")
        .attr("id", "submitbutton")
        .text("- CHECK ANSWER -")
        .css({
          "font-weight": "bold",
          color: "#fff",
          padding: "30px 0",
          "border-radius": "10px"
        })
        .appendTo("#frame");

      setupButtons();
    }
  }

  init();
});

jQuery(document).ready(function($) {
  $("#question").html(function() {
    var text = $(this)
      .text()
      .trim()
      .split(" ");
    var first = text.shift();
    return (
      (text.length > 0 ? "<span class='number'>" + first + "</span> " : first) +
      text.join(" ")
    );
  });

  $("p.pager").each(function() {
    var text = $(this)
      .text()
      .split(" ");
    if (text.length < 2) return;

    text[1] = '<span class="qnumber">' + text[1] + "</span>";
    $(this).html(text.join(" "));
  });
});

function copyText() {
  var output = document.getElementById("frame").innerHTML;
  document.getElementById("placecontent").value = output;
}
