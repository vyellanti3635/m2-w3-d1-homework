/* ------ ACTIVITIES TABLE ------ */

//User interaction with table cells
$(document).ready(function() {
    var notAvailable = "Not Available"; //Text of cells that cannot be selected

    //Find the activity cells that can be selected (skip the title cell at the start of each row)
    var activityCells = $("tbody td").not(":first-child").filter(function () {
        return $(this).text() != notAvailable; //Keep only cells that have an activity
    });

    //Display the hand cursor on cells that can be selected
    activityCells.addClass("selectable");

    //User select an activity cell
    activityCells.click(function () {
        var content = $(this).text(); //Get content of cell
        var column = $(this).index(); //Get column number of cell within its row
        var cliff = $("thead th").eq(column).text(); //Get cliff name from the heading of the same column
        var activity = content + " at " + cliff; //Assemble activity name with cliff name

        $(this).toggleClass("tdhighlight"); //Add or remove class when cell is selected

        if ($(this).hasClass("tdhighlight")) { //Check if selected cell has class
            $("#displaySelected").css("visibility", "visible"); //Make display box visible
            $("#displaySelected").css("margin-top", "2em"); //Add spaces above display box
            $("#result").append("<p>" + activity + "</p>"); //Add child element with activity and cliff name

        } else { //If selected cell don't have class
            $("#result p").filter(function () {
                return $(this).text() == activity; //Find the child element of this activity
            }).remove(); //Remove child element

            if ($("#result").has("p").length == false) { //Check if there are any child elements within parent
                $("#displaySelected").css("visibility", "hidden"); //Make display box hidden
                $("#displaySelected").css("margin-top", "0"); //Remove spaces above display box
            }
        }
    });
});
