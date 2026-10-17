/* ------ PARTNERS ------ */

//Partners list converted from HTML to JavaScript
var partnerFiles = ["partner-bustour", "partner-cabinrental", "partner-campingadv", "partner-collegetours", "partner-rentalbike", "partner-tourgroup"]; //Image file names
var partnerAlts = ["Partner Bus Tours", "Partner Cabin Rental", "Partner Camping Adventure", "Partner College Tours", "Partner Bike Rentals", "Partner Tour Group"]; //Image alt texts
var partnerImages = []; //Declare an empty array to store image elements
var partnerList = []; //Declare an empty array to store html list that contain an image
var partner; //Declare an empty variable to store the assembled partner list codes
var openPartner = "<li class='partner col-12 col-sm-6 col-md-4 col-lg-2'>"; //Declare a variable to contain open list tag (Bootstrap column classes are used by the responsive home page)
var closePartner = "</li>"; //Declare a variable to contain close list tag

//Create a loop to create an image list for every partner
for (var i=0; i<partnerFiles.length; i++) {
    partnerImages.push("<img src='images/partners/"+partnerFiles[i]+".png' alt='"+partnerAlts[i]+"'>"); //Assemble file name and alt text into image element
    partner = openPartner + partnerImages[i] + closePartner; //Assemble image element with list elements
    partnerList.push(partner); //Store(push) the assembled list codes into an array
}

//Display all partner image codes stored in the array (join replaces the commas between array items with a space, same gap as the HTML list)
document.getElementById("partners").innerHTML = partnerList.join(" ");
