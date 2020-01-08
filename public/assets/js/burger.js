$(".burger-form").on("submit", function(event) {
    event.preventDefault();

    let burgerName = $("#burgerName").val().trim()

    if (burgerName === "") {
        alert("Please enter a burger name to add it to the menu.")
    } else {
        let newBurger = {
            name: burgerName
        }
    }

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    });
})