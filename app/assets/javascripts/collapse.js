$(document).ready(function(){
    var item_id = $("button.toggle-collapse").attr("data-target");
    var time_collapse = "350";

    $(item_id).hide();

    $("button.toggle-collapse").click(function(){
        $(item_id).slideToggle(time_collapse);
    });
});