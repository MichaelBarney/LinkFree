
$(document).ready(function () {
     // Add here commands to run on page loaded
});

$( ".link" ).click(function() {
    $('#lightsaber-ignition-2')[0].play();
});

$( ".link" ).mouseenter(function () {
    $( "#lightsaber-ignition-0" )[0].volume = 0.4
    $( "#lightsaber-ignition-0" )[0].play();
});

$( ".link" ).mouseleave(function () {
    $( "#lightsaber-ignition-1" )[0].volume = 0.4
    $( "#lightsaber-ignition-1" )[0].play();
});