# burger
Good Burger

## Directory-by-Directory Explanation

### config
Contains a connection.js file to connect webpage to database and an orm.js file to build a dynamic map for the database.

### controllers
Contains a burger_controller.js file to establish API routes for GET, PUT, and POST functions.

### db
Folder contains both a seed.sql and schema.sql file for MySQL to create and initially populate the burger table.

### models
Contains burger.js, which requires the orm from config and customizes it to work with this specific database and table.

### public/assets
Contains CSS, images, and web application JS.

### views
Layouts folder contains main.handlebars for building front-end. Partials folder contains partial for constructing each "burger" list item. index.handlebars creates and separates two burger tables/lists.

### server.js
Establishes connection to localhost:8080