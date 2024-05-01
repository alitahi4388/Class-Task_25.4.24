$(function () {
    $("#addbutton").click(handleButtonClick);
    $("#todos").on("click", "li", removeMe);
});

function handleButtonClick() {
    var newTodo = $("#myinput").val();
    if (!newTodo) {
        $("#myinput").addClass("error");
        return;
    }
    $("#myinput").removeClass("error");
    $("#todos").append("<li>" + newTodo + "</li>");
}

function removeMe() {
    $(this).fadeOut(function() {
        $(this).remove();
    });
}