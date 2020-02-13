# Welcome to Good Burger
A full-stack application that populates a MySQL database with user inputs, Express to run a server, and Handlebars to render data to the DOM.

## What it Does
When the user fills out and submits the input field, their text is sent to a MySQL database and triggers an update to the "Current Order" div. 
Each time a burger is created, it also creates the "NOM NOM NOM!" button, which users click to "eat" the burger. 
When clicked, the "devoured" value for the burger is changed to "true," and the HTML object is moved to the "Past Orders" div. From there, the user can click the "I like it! Another!" button to change the "devoured" value back to false, moving the item back to the "Current Order" div.

