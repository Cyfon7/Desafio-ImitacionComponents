$(document).ready(function(){
    var item_id_1 = $(".accordion button.toggle-collapse-1").attr("data-target");
    var item_id_2 = $(".accordion button.toggle-collapse-2").attr("data-target");
    var item_id_3 = $(".accordion button.toggle-collapse-3").attr("data-target");
    var time_collapse_multi = "300";

    $(item_id_1).hide();
    $(item_id_2).hide();
    $(item_id_3).hide();

    $(".accordion button.toggle-collapse-1").click(function(){
        $(item_id_1).slideToggle(time_collapse_multi);
    });
    $(".accordion button.toggle-collapse-2").click(function(){
        $(item_id_2).slideToggle(time_collapse_multi);
    });
    $(".accordion button.toggle-collapse-3").click(function(){
        $(item_id_3).slideToggle(time_collapse_multi);
    });
});