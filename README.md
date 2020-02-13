# Welcome to Good Burger
A full-stack application that populates a MySQL database with user inputs, Express to run a server, and Handlebars to render data to the DOM.

## What it Does
When the user fills out and submits the input field, their text is sent to a MySQL database and triggers an update to the "Current Order" div. 
Each time a burger is created, it also creates the "NOM NOM NOM!" button, which users click to "eat" the burger. 
When clicked, the "devoured" value for the burger is changed to "true," and the HTML object is moved to the "Past Orders" div. From there, the user can click the "I like it! Another!" button to change the "devoured" value back to false, moving the item back to the "Current Order" div.

## How it Works
- First, the server.js file spins up a server at port 8080 using Express, and requiring all of the relevant packages and the burger_controller.
- Main.handlebars is displayed, with any created tables applied within the {{{body}}} block.
- When the user clicks the submit button, a "newBurger" item is created and passed into the MySQL database. In turn, this populates a row on the "Current Order" table HTML item via an API put request/Express-Handlebars.
- Similarly, when the user clicks either the "NOM NOM NOM!" button or the "I like it! Another!" button, the item's status is changed in the database, and the table is refreshed, moving the burger to the appropriate table. 