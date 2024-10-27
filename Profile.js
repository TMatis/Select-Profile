/* Assign text of your name, your major and your year (freshman etc) to the level 3 headings, using calls to jQuery
Use the jQuery html method to bold your home state or country and use this as the content for the level 4 heading (instead of .text, use .html, and include the <em> ... </em> tags */

const setUp = () => {
    $("#name").text("Timo");
    $("#major").text("CIT");
    $("#year").text("2026");
    $("h4").html("<em>USA</em>")
};
  
$(document).ready(setUp);