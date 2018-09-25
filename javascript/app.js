$(document).ready(function () {
    console.log("testing");

    var topics = ["Bravo TV", "Real Housewives", "Real Housewives of Atlanta", "Real Housewives of New York", "Real Housewives of Orange County", "Real Housewives of New Jersey", "Tamra Judge", "Shannon Beador", "Kim Zolciak", "Carole Radziwill", "Ramona Singer", "Meghan King Edmonds"];


    $(document).on("click", ".bravo", function () {
        var housewife = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + housewife + "&api_key=9CZsw69B0LwGiNdFxWFJhNZ9zKMnqSWC&limit=10";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var results = response.data;
            for (i = 0; i < results.length; i++) {
                var gifStill = results[i].images.fixed_width_still.url;
                var gifAnimate = results[i].images.fixed_width.url;
                var gifRating = results[i].rating;
                var wifeImage = $("<img>");
                var ratingP = $("<p id='rated'>");
                $(ratingP).text("this gif is rated: " + gifRating);
                wifeImage.attr("src", gifStill );
                wifeImage.addClass("gif");
                wifeImage.attr("data-state", "still");
                wifeImage.attr("data-still", gifStill);
                wifeImage.attr("data-animate", gifAnimate);
                wifeImage.attr("alt", "animal-gif");
                $("#housewives-view").prepend(ratingP, wifeImage);
            }
        })
    })

    $("#housewives-view").on("click", ".gif", function () {
        var state = $(this).attr("data-state")
        if (state === "still"){
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still")
        }

    });

    function makeButtons() {
        $("#buttons").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>")
            a.addClass("bravo");
            a.attr("data-name", topics[i]);
            a.text(topics[i]);
            $("#buttons").append(a);
        }
    }

    $("#add-housewife").on("click", function (event) {
        event.preventDefault();
        var userWife = $("#wife-input").val().trim();
        topics.push(userWife);
        console.log(topics);
        makeButtons();
    });

    makeButtons();

});
