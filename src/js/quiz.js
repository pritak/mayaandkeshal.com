var counter = 0;
var right = 0;
var questions = [
    ["Where did Maya and Keshal meet?", "Spring break, Miami - cliché, we know", "At Columbia University, obviously", "Through a friend who set them up - Hi, Friend! You know who you are ;)", "In the one Anthropology class Keshal took while at Columbia. It was called 'Magic, Witchcraft and Religion'. He thought it 'sounded cool'.", "1"],
    ["How long have they been together?", "6 years", "7 years", "8 years", "An eternity. Seriously, what took them so long?", "4"],
    ["How long were they in a long distance relationship?", "They were in a long distance relationship??", "3 years", "4 years", "5 years", "4"],
    ["Where did they get engaged?", "Miami, Florida - where it all began", "Lisbon, Portugal - Maya thought it was a vacation with Keshal's family", "Boston, Massachusetts - on a random Sunday, with Otis Redding on the record player, over brunch", "New York City, New York - it was a full on flash mob", "2"],
    ["Who is the bride-zilla between the two?", "Keshal", "Maya", "1"],
    ["What is their preferred term of endearment?", "Boo", "Babe", "Hon", "Dear", "1"],
    ["Which of these is a nickname Maya has for Keshal?", "Schmoomoo", "Boo Radley", "KP", "Keshal Facial", "All of the above", "5"],
    ["Which of these is a nickname Keshal has for Maya? ", "Clown", "Ma", "Booface", "Garfield", "All of the above", "5"],
    ["Over the years, Maya and Keshal have had a lot of adventures together. What <i>haven't</i> they done together?", "Climbed a volcano", "Scuba dived in fresh water caves", "Taken a woodworking class", "Gone to a music festival", "All of the above", "3"]
];

$(document).ready(function () {
    $(document).on("click", ".true", function () {
        right = right + 1;
        $(".true").css("background-color", "#44D37E");
        $(".true").css("color", "white");
        $(".false").css("background-color", "#2F1C42");
        $(".false").css("color", "white");
        window.setTimeout(nextQuestion, 1200);
    });
    $(document).on("click", ".false", function () {
        $(".true").css("background-color", "#44D37E");
        $(".true").css("color", "white");
        $(".false").css("background-color", "#2F1C42");
        $(".false").css("color", "white");
        window.setTimeout(nextQuestion, 1200);
    });

    function nextQuestion() {
        document.getElementById("progress").value += 12 
        counter = counter + 1;
        if (counter > 8) {
            $('#a1, #a2, #a3, #a4, #a5, #question').fadeOut("slow", function () {
                if (right == 9){
                    var result = $("<div id='question' class='field is-size-4'><strong class='has-text-success'>You got all " + right +"/9 right.</strong></br><div class='is-size-5'> Wow! You got them all right! There's no way you're not a stalker. Not that you need it, but scroll down to read the full story!</div></div>").hide();
                }
                else if (right >= 7){
                    var result = $("<div id='question' class='field is-size-4'><strong class='has-text-success'>You got " + right +"/9 right.</strong></br><div class='is-size-5'> Pretty good! You must be quite close to Maya and Keshal... or you're a stalker. Scroll down for the full story!</div></div>").hide();
                }
                else if (right < 7 && right >= 3){
                    var result = $("<div id='question' class='field is-size-4'><strong class='orange'>You got " + right +"/9 right.</strong></br><div class='is-size-5'> You've got some work to do! Scroll down and read up...</div></div>").hide();
                }
                else {
                    var result = $("<div id='question' class='field is-size-4'><strong class='has-text-danger'>You got " + right +"/9 right.</strong></br><div class='is-size-5'> Wow you did terribly! Do you even know Maya and Keshal!? Scroll down and take notes...</div></div>").hide();
                }
                $('#couple-20').replaceWith('<div id="couple-20" class="column is-4 is-offset-1"><p class="title is-2 "><span class="rsvp-label">Your Results</span></p></div>');
                $('#question').replaceWith(result);
                $('#question').fadeIn("slow");
                $('#progress').replaceWith("<p style='line-height:0px;margin:-15px;'><br></p>");
            });
        }
        else {
            $(".true").css("background-color", "#FFFEFE");
            $(".true").css("color", "black");
            $(".false").css("background-color", "#FFFEFE");
            $(".false").css("color", "black");

            $('#question').fadeOut("slow", function () {
                var newQ = $("<div id='question' class='field'><strong>Question " + (counter + 1) + "/9</strong><label id='real-question' class='label is-size-5'>" + questions[counter][0] + "</label ></div >").hide();
                $(this).replaceWith(newQ);
                $('#question').fadeIn("slow");
            });

            var numAnswers = questions[counter].length - 2;
            var correctAnswer = questions[counter][numAnswers + 1];

            if (numAnswers == 4) {
                $('#a1').fadeOut("slow", function () {
                    var newa = $("<p id='a1' class='control'><a class='box " + (correctAnswer == 1) + "'>" + questions[counter][1] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a1').fadeIn("slow");
                });
                $('#a2').fadeOut("slow", function () {
                    newa = $("<p id='a2' class='control'><a class='box " + (correctAnswer == 2) + "'>" + questions[counter][2] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a2').fadeIn("slow");
                });
                $('#a3').fadeOut("slow", function () {
                    newa = $("<p id='a3' class='control'><a class='box " + (correctAnswer == 3) + "'>" + questions[counter][3] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a3').fadeIn("slow");
                });
                $('#a4').fadeOut("slow", function () {
                    newa = $("<p id='a4' class='control'><a class='box " + (correctAnswer == 4) + "'>" + questions[counter][4] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a4').fadeIn("slow");
                });
            }
            else if (numAnswers == 5) {
                $('#a1').fadeOut("slow", function () {
                    var newa = $("<p id='a1' class='control'><a class='box " + (correctAnswer == 2) + "'>" + questions[counter][2] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a1').fadeIn("slow");
                });
                $('#a2').fadeOut("slow", function () {
                    newa = $("<p id='a2' class='control'><a class='box " + (correctAnswer == 3) + "'>" + questions[counter][3] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a2').fadeIn("slow");
                });
                $('#a3').fadeOut("slow", function () {
                    newa = $("<p id='a3' class='control'><a class='box " + (correctAnswer == 4) + "'>" + questions[counter][4] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a3').fadeIn("slow");
                });
                $('#a4').fadeOut("slow", function () {
                    newa = $("<p id='a4' class='control'><a class='box " + (correctAnswer == 5) + "'>" + questions[counter][5] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a4').fadeIn("slow");
                });
                $('#a5').fadeOut("slow", function () {
                    newa = $("<p id='a5' class='control'><a class='box " + (correctAnswer == 6) + "'>" + questions[counter][1] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a5').fadeIn("slow");
                });
            }
            else {
                $('#a1').fadeOut("slow", function () {
                    var newa = $("<p id='a1' class='control'><a class='box " + (correctAnswer == 1) + "'>" + questions[counter][1] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a1').fadeIn("slow");
                });
                $('#a2').fadeOut("slow", function () {
                    newa = $("<p id='a2' class='control'><a class='box " + (correctAnswer == 2) + "'>" + questions[counter][2] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a2').fadeIn("slow");
                });
                $('#a3').fadeOut("slow", function () {
                    newa = $("<p id='a3' class='control'></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a3').fadeIn("slow");
                });
                $('#a4').fadeOut("slow", function () {
                    newa = $("<p id='a4' class='control'></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a4').fadeIn("slow");
                });
            }

        }
    }
});