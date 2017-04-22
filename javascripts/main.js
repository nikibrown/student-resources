$(document).ready(function() { // run when the document is ready
    var links = $( "main a" ).length; // make a variable called links - look for # of links in the <main> element
    $( "em.intro" ).text( links + " helpful links and counting!"); // find the <em> tag with a class of intro and update the text of the element with # of links
});
