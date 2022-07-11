$(document).ready(function() {
    $("#keyword").keyup(function() {
    })
})

$(document).ready(function() {
    $("#keyword").keyup(function() {
        var k = $(this).val();
    })
})

$(document).ready(function() {
    $("#keyword").keyup(function() {
        var k = $(this).val();
        $("#user-table > tbody > tr").hide();
    })
})

$(document).ready(function() {
    $("#keyword").keyup(function() {
        var k = $(this).val();
        $("#user-table > tbody > tr").hide();
        var temp = $("#user-table > tbody > tr > td:nth-child(2n+1):contains('" + k + "')");

        $(temp).parent().show();
    })
})