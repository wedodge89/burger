


// Button click to devour burger/PUT request
$(function() {
    $(".changeDevoured").on("click", function(event) {
        let id = $(this).data("id");
        let devoured = $(this).data("devoured");
        
        if (devoured) {
            devoured = false
        } else {
            devoured = true
        };

        let devouredState = {
            devoured: devoured
        };

$.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: devouredState,
}).then(
    function() {
        console.log("Changed 'Devoured' to", devouredState);
        location.reload();
        });
    });
});

// Button click to add burger/POST request
$(".burger-form").on("submit", function(event) {
    event.preventDefault();
    let newBurger = {
        burger_name: $("#burgerName").val().trim(),
    };

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