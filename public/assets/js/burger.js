
let newDevouredState = {
    devoured: newDevoured
}


// PUT request
$.ajax("/api/burgers/" + IDBCursor, {
    type: "PUT",
    data: newDevouredState
}).then(
    function() {
        console.log("Changed 'Devoured' to", newDevoured);
        location.reload();
    });

// Button click
$(".burger-form").on("submit", function(event) {
    event.preventDefault();

    let newBurger = {
        name: $("#burgerName").val().trim(),
        devoured: false
    }

// POST request
$.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
}).then(
    function() {
        console.log("Created new burger");
        location.reload();
    }
)
});