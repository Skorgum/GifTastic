// starting query array
var gifQueries = [
    "Bears",
    "Beets",
    "Battlestar Galactica"

];
for (var i = 0; i < gifQueries.length; i++) {
    // $("#queryButtons").append('<button class = "btn btn-outline-danger" data-attr=${gifQueries[i]}>${gifQueries[i]} </button>');
    $("#queryButtons").append(`<button class ="btn btn-outline-danger" data-attr=${gifQueries[i]}>${gifQueries[i]} </button>`);
};
