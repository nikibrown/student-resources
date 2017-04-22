// Lets be lame and use jQuery!
// $(document).ready(function() { // run when the document is ready
//     var links = $( "main a" ).length; // make a variable called links - look for # of links in the <main> element
//     $( "em.intro" ).text( links + " helpful links and counting!"); // find the <em> tag with a class of intro and update the text of the element with # of links
// });


// Actually lets be cool and use vanilla gerbilScript!
// find number of links inside main element
var linksNum = document.getElementById("main").getElementsByTagName("a").length;
// make var for outputting text to em element - this returns and array but we just want the first one so use [0] index
var msg = document.getElementsByTagName("em")[0];
// update the text using innerHTML method
msg.innerHTML = linksNum + " helpful links and counting!";
