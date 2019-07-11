console.log("( ͡◉ ͜ʖ ͡◉)");

// starting query array
var gifQueries = [
    "Bears",
    "Beets",
    // this string console logs as only "Battlestar", why?
    // TODO:  try as a nested array
    "Battlestar Galactica"
];

// for loop appending query array as buttons
for (var i = 0; i < gifQueries.length; i++) {
    // why does only ` work as the html wrapper here, why won't single or double quotes work?
    $("#queryButtons").append(`<button class ="btn-outline-danger" data-attr=${gifQueries[i]}>${gifQueries[i]} </button>`);
};

// why is the class needed for the onclick event here?
$("#queryButtons").on("click", ".btn-outline-danger", function(event) {
    event.preventDefault();
    var queryText = $(this).attr("data-attr");
    console.log(queryText);
    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${queryText}&api_key=NcEjqrxpnvmcIzbsvZ9CgPV4ED52638a`;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
        console.log(response);
        var data = response.data;
        for (var i = 0; i < response.data.length; i++) {
            $("#queryResults").prepend(`<img class="gifimages" data-still="${data[i].images.fixed_height_still.url}"data-animate ="${data[i].images.fixed_height.url}" data-state="animate" src="${data[i].images.fixed_height.url}" width=310 height=310 />`)
        }
    });
});

// submit button onclick event

// query results onclick event to start/stop animation