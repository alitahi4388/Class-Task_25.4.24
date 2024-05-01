$(function () {
    $("#addbutton").click(handleButtonClick);
    $("#todos").on("click", ".remove-btn", removeMe);
});

function handleButtonClick() {
    var newTodo = $("#myinput").val();
    if (!newTodo) {
        $("#myinput").addClass("error");
        return;
    }
    $("#myinput").removeClass("error");
    var newRow = $("<tr><td>" + newTodo + "</td><td><button class='remove-btn'>Remove</button></td></tr>");
    $("#todos tbody").append(newRow);
}

function removeMe() {
    $(this).closest("tr").fadeOut(function() {
        $(this).remove();
    });
}