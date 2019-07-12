console.log("( ͡◉ ͜ʖ ͡◉)");

// starting query array
var gifQueries = [
    "Bears",
    "Beets",
    ["Battlestar", "Galactica"],
];

// for loop appending query array as buttons
for (var i = 0; i < gifQueries.length; i++) {
    // why does only ` work as the html wrapper here, why won't single or double quotes work?
    // why am I restricted to a continuous string without spaces for the button class?  btn btn-outline-danger causes issues with the onclick event
    $("#queryButtons").append(`<button class= "btn btn-outline-danger" data-attr= ${gifQueries[i]}>${gifQueries[i]} </button>`);
};

// why is the class needed for the onclick event here?  The event does not register without it.
$("#queryButtons").on("click", ".btn-outline-danger", function (event) {
    event.preventDefault();
    var queryText = $(this).attr("data-attr");
    console.log(queryText);
    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${queryText}&api_key=NcEjqrxpnvmcIzbsvZ9CgPV4ED52638a`;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        var data = response.data;
        for (var i = 0; i < response.data.length; i++) {
            $("#queryResults").prepend(`<img class= "gifimages" data-still= "${data[i].images.fixed_height_still.url}"data-animate= "${data[i].images.fixed_height.url}" data-state="animate" src="${data[i].images.fixed_height.url}" width=310 height=310 />`)
        }
    });
});

// submit button onclick event
$("#submit").on("click", function (event) {
    event.preventDefault();
    var query = $("#gifQuery").val().trim();
    console.log(query);
    gifQueries.push(query);
    console.log(gifQueries);
    $("#queryButtons").append(`<button class= "btn-outline-danger"  data-attr= ${query}>${query}</button>`)
})

// query results onclick event to start/stop animation
$(document).on("click", ".gifimages", function () {
    console.log("HIT")
    var state = $(this).attr("data-state");
    console.log(state);
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
})
