$("#localSave").click(function(event) {
    var inputValue = $("#name").val()
    var inputValue2 = $("#bgcolor").val()
    localStorage.setItem("name", inputValue);
    localStorage.setItem("bgcolor", inputValue2);
});


    var name = localStorage.getItem("name");
    var color = localStorage.getItem("bgcolor");

    $("#nameAndColor").append("<p>Name: " + name + " & Color: " + color  + "</p>");

  $("body").css( "background-color", color );
$( "form" ).on( "submit", function() {
});

function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
 
// then to call it, plus stitch in '4' in the third group
guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();

 $( "footer" ).append("<p> Hi " + name + "!</p><p>" + " Your session ID is: " + guid + "</p>");