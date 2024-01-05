// Lets be lame and use jQuery!
// $(document).ready(function() { // run when the document is ready
//     var links = $( "main a" ).length; // make a variable called links - look for # of links in the <main> element
//     $( "em.intro" ).text( links + " helpful links and counting!"); // find the <em> tag with a class of intro and update the text of the element with # of links
// });


// Actually lets be cool and use vanilla gerbilScript!
// find number of links inside main element
var links = document.getElementById("main").getElementsByTagName("a");
var linksNum = links.length;
// make var for outputting text to em element - this returns and array but we just want the first one so use [0] index
var msg = document.getElementsByTagName("em")[0];
// update the text using innerHTML method
msg.innerHTML = linksNum + " helpful links and counting!";

// some magic that grabs href of the <main><a> links and does things with their href attribute and sets it to a data-target which we show with css content
for (i = 0; i < links.length; ++i) {
    var url = links[i].getAttribute('href')

    if (url.indexOf("://") > -1) {
      hostname = url.split('/')[2];
    }
    else {
      hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];
    links[i].setAttribute('data-target', hostname);
}
