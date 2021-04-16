$(document).ready(function(){
    $('.dismiss').show();

    $( ".dismiss > button").click(function(){
        $('.dismiss').remove();
    });
});

