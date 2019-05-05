var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'API_KEY_HERE' }).base('BASE_KEY_HERE');
var id, names, invites, rsvpNum, updatedNames;
var emailInput = document.getElementById("email-input");

emailInput.addEventListener("keyup", function (event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Trigger the button element with a click
        document.getElementById("check-email").click();
    }
});

function endError() {
    $("#rsvp-box").remove();
    $("#rsvp-title").replaceWith("<div id='rsvp-title'> <strong> Oh no! Something went wrong. </strong> Please try again or contact us directly if things still don't work. </div>")
}

function endSuccess() {
    $("#rsvp-box").remove();
    $("#rsvp-title").replaceWith("<div id='rsvp-title'> <strong> You're all set! </strong> Feel free to update your RSVP anytime if plans change. </div>")
}

function submit() {
    document.getElementById("submit").classList.add("is-loading");
    if (rsvpNum == 0) {
        base('RSVPs').update(id, {
            "RSVP'd?": true,
            "# of RSVPs": rsvpNum,
            "RSVP'd Names": ""
        }, function (err, record) {
            if (err) { endError(); return; }
            endSuccess();
        });
    } else {
        updatedNames = "";
        for (i = 1; i <= rsvpNum; i++) {
            if (rsvpNum == i) {
                updatedNames += document.getElementById("input-" + i).value;
            } else {
                updatedNames += document.getElementById("input-" + i).value + ", ";
            }
        }
        base('RSVPs').update(id, {
            "RSVP'd?": true,
            "# of RSVPs": rsvpNum,
            "RSVP'd Names": updatedNames
        }, function (err, record) {
            if (err) { endError(); return; }
            endSuccess();
        });
    }
}

function enterNames(selected) {
    var previousValues = [];
    if (document.getElementById("input-"+1) != null){
        for (i = 1; i <= rsvpNum; i++) {
            previousValues.push(document.getElementById("input-"+i).value);
        }
    }
    $("#rsvp-names").remove();
    if (selected == "Select") { return; }
    rsvpNum = parseInt(selected);
    if (parseInt(selected) == 0) {
        $("#rsvp-names").remove();
        $("#rsvp-box").append('<div id="rsvp-names">' +
            '<div class="field">' +
            '<p class="control">' +
            '<button id="submit" onclick="submit()" class="button is-link is-medium">' +
            'Submit RSVP' +
            '</button>' +
            '</p>' +
            '</div>' +
            '</div>');
        return;
    }
    var inputBoxes = "";
    for (i = 1; i <= parseInt(selected); i++) {
        if (previousValues[i-1] != undefined){
            inputBoxes += '<div class="field"><input id="input-' + i + '" class="input is-medium" type="text" value="' + previousValues[i-1] + '" placeholder="Name ' + i + '"></div>';
        } else {
            inputBoxes += '<div class="field"><input id="input-' + i + '" class="input is-medium" type="text" placeholder="Name ' + i + '"></div>';            
        }
    }
    $("#rsvp-box").append('<div id="rsvp-names">' +
        '<br>' +
        '<label class="label is-medium">Who&#39;s coming ?</label>' +
        inputBoxes +
        '<div class="field">' +
        '<p class="control">' +
        '<button id="submit" onclick="submit()" class="button is-link is-medium">' +
        'Submit RSVP' +
        '</button>' +
        '</p>' +
        '</div>' +
        '</div>');
}

function selectNumberPeople(greeting) {
    if (greeting == undefined){
        $("#rsvp-title").replaceWith("<strong id='rsvp-title'> Hi " + names + "!</strong>")
    } else {
        $("#rsvp-title").replaceWith(greeting)
    }
    $("#rsvp-initial").remove();
    var options = "";
    for (i = 0; i <= invites; i++) {
        options += '<option>' + i + '</option>';
    }
    $("#rsvp-box").append('<div id="rsvp-attend" class="animated fadeIn">' +
        '<label class= "label is-medium" > How many of you are coming ?</label>' +
        '<div class="field">' +
        '<div class="select is-medium">' +
        '<select id="dropdown" onchange="enterNames(this.value)">' +
        '<option>Select</option>' +
        options +
        '</select>' +
        '</div>' +
        '</div>' +
        '</div>');
}

function alreadyRSVPed(){
    selectNumberPeople("<strong id='rsvp-title'> Welcome back " + names + "!</strong>");
    document.getElementById("dropdown").value = rsvpNum;
    enterNames(rsvpNum);
    if (updatedNames != undefined){
        splitNames = updatedNames.split(",");
        for (i = 1; i <= rsvpNum; i++) {
            document.getElementById("input-"+i).value = $.trim(splitNames[i-1]);
        }
    }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function checkEmail() {
    document.getElementById("check-email").classList.add("is-loading");
    if (validateEmail(emailInput.value)) {
        base('RSVPs').select({
            filterByFormula: 'FIND("' + emailInput.value.toLowerCase() + '", Email)',
        }).eachPage(function page(records, fetchNextPage) {

            records.forEach(function (record) {
                id = record.id;
                rsvpNum = record.get('# of RSVPs');
                updatedNames = record.get("RSVP'd Names");                
                names = record.get('Formal Name Addresses');
                if (names == undefined) {
                    names = record.get("Names");
                }
                invites = record.get('# of Invites');
            });

            fetchNextPage();

        }, function done(err) {
            if (names != null) {
                if (rsvpNum != undefined) { alreadyRSVPed(); }
                else { selectNumberPeople(); }
                return;
            }
            if (names == null) {
                document.getElementById("check-email").classList.remove("is-loading");
                document.getElementById("email-input").classList.add("is-danger");
                $("#help-message").replaceWith("<p id='help-message' class='help is-danger animated shake'>That email address wasn't found on our list. Please try another email or contact us directly to RSVP.</p>")
                return;
            }
            if (err) { endError(); return; }
        });

    }
    else {
        document.getElementById("check-email").classList.remove("is-loading");
        document.getElementById("email-input").classList.add("is-danger");
        $("#help-message").replaceWith("<p id='help-message' class='help is-danger animated shake'>Please enter a valid email address</p>")
    }
}