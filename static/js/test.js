$(function () {
  $("#btn-clear").on("click", function () {
    $("input[type='radio']").prop('checked', false);
    $("label").removeClass("correct-answer").removeClass("incorrect-answer");
    $('.panel a').removeClass("correct-answer").removeClass("incorrect-answer");
    $("#side-text").text('');
  });
  
  $("#btn-submit").on("click", function () {    
    var correctAnsws = 0;
    
    var questions = $("li.question");
    // Find quick access links in side panel
    var sidePanelLinks = $(".panel a");
    
    // Check if we have the same amount of questions
    var flag = questions.length === sidePanelLinks.length;
    
    // Reset current markup
    $("label").removeClass("correct-answer").removeClass("incorrect-answer");
    $(sidePanelLinks).removeClass("correct-answer").removeClass("incorrect-answer");
    
    for (var i = 0; i < questions.length; i++) {
      var question = questions[i];
      var quickLinkQuest = sidePanelLinks[i];
      
      var choices = $(question).find(".quest-choices input[type='radio']");
      var correctChoice = $(question).find(".quest-choices input[data-correct='True']");
      
      for (var j = 0; j < choices.length; j++) {
        var choice = $(choices[j]);
        
        if (choice.prop("checked") && choice.data("correct") == "True") {
          correctAnsws++;
          $(choice).parent().addClass("correct-answer");
          if (flag) $(quickLinkQuest).addClass("correct-answer");
        } else if (choice.prop("checked") && choice.data("correct") == "False") {
          $(choice).parent().addClass("incorrect-answer");
          if (flag) $(quickLinkQuest).addClass("incorrect-answer");
          correctChoice.parent().addClass("correct-answer");
        }
      }
    }
    
    // Update text area
    var textArea = $("#side-text");
    textArea.text("Correct answers: " + correctAnsws + " / " + questions.length);
    
    // Update colors
  });
});