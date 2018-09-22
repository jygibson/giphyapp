$(document).ready(function () {
    console.log("testing");

    var topics = ["kittens", "puppies", "tigers", "lions", "ligers", "unicorns", "goats", "llamas", "mermaids"];


    function makeButtons() {
        $("#buttons").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>")
            a.addClass("animal");
            a.attr("data-name", topics[i]);
            a.text(topics[i]);
            $("#buttons").append(a);
        }
    }

    $("#add-animal").on("click", function (event) {
        event.preventDefault();
        var userAnimal = $("#animal-input").val().trim();
        topics.push(userAnimal);
        console.log(topics);
        makeButtons();
    });


    makeButtons();

});
