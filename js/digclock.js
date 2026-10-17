/* ------ DIGITAL CLOCK ------ */

//Create a time data function
function currentTime() {
    //Declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; //Declare empty variable to store AM or PM
    var utchr = d.getUTCHours(); //Get current Greenwich Mean Time (GMT)
    var timeDiff; //To store time difference between GMT hour and Local hour
    var adjTimeDiff; //To store time difference converted to positive number
    var timeZone; //To store the 4 time zones (PT,MT,CT,ET)

    //Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    //Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }

    //Determine AM or PM string
    if (hr == 12) {
        ampm = "PM"; //Set to PM
    } else if (hr > 12) {
        hr -= 12; //Deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; //Set to PM
    } else {
        ampm = "AM"; //Set to AM
    }

    //Convert GMT hour from military time to standard time
    if (utchr > 12) {
        utchr -= 12;
    }

    //Calculate time difference between GMT hour and local hour
    timeDiff = utchr - hr;

    //Convert time difference, if negative, to positive
    if (timeDiff < 0) {
        adjTimeDiff = timeDiff + 12;
    } else {
        adjTimeDiff = timeDiff;
    }

    //Add 1 hour back during daylight saving time so each zone has one fixed difference
    var janOffset = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
    var julOffset = new Date(d.getFullYear(), 6, 1).getTimezoneOffset();
    if (d.getTimezoneOffset() < Math.max(janOffset, julOffset)) {
        adjTimeDiff += 1;
    }

    //Check which time zone based on the adjusted time difference
    if (adjTimeDiff == 8) {
        timeZone = "PT"; //Pacific Time
    } else if (adjTimeDiff == 7) {
        timeZone = "MT"; //Mountain Time
    } else if (adjTimeDiff == 6) {
        timeZone = "CT"; //Central Time
    } else if (adjTimeDiff == 5) {
        timeZone = "ET"; //Eastern Time
    } else {
        timeZone = ""; //Outside the 4 time zones
    }

    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    //Display current local time and time zone on HTML element
    document.getElementById("clock").innerText = time; //adding time
}

//Initial run of time data function
currentTime();

//Run time data function every 1 second
setInterval(currentTime, 1000); //setting timer
