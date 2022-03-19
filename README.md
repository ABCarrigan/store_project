# <a href="https://acardiner.herokuapp.com/products">My Store Project - Diner</a>

### A fullstack application using node.js and mongoDB, deployed via Heroku.

The goal of this application was to create a web app that interacts with a live database, which can be manipulated by the user to create, edit, or delete entries in the database. The application has a diner theme but the user is free to add whatever they wish to it.
<br>Link to the application on Heroku: <a>https://acardiner.herokuapp.com/products</a>


### A video demonstration of the application at work.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ygmYXh-YyIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### A step by step guide on how to install and use this application locally.

First, download the repository to your PC. You can download it as a ZIP file.<br>

Now that we've downloaded the repository (don't forget to extract the zip), you'll need the node_modules folder and the .env file that is in the gitignore. <br>We'll install the node_modules first. Open up the repository in Visual Studio, then open your terminal and run `npm install`.<br>
Next, you will want to create a .env file to and connect your mongoDB to it, using the connection string provided to you by the site.<br>
After doing this, you will want to seed the database using my seeds.js file. You can do this with the command `node seeds.js`.<br>
After installing these, use the command `nodemon`. You should be able to navigate to http://localhost:3000/products after this.

### Some examples of what the application looks like when installed.

##### The /products Index page.

<img src="images/index.png">

##### A preview of the Edit view, accessed from the Edit button on an item.

<img src="images/edit.png">

##### A demonstration of how the index updates to reflect a new edit.

<img src="images/post-edit.png">

##### A display of the Delete button at work.

<img src="images/delete.png">

##### A display of the page you're taken to when you click on the green "create" button.

<img src="images/create.png">

##### Showing what happens after you create an entry.

<img src="images/post-create.png">

##### A display of the Show view, accessed from clicking the View button.

<img src="images/show.png">

##### A display of the buy button's function, decreasing the quantity of the item.

<img src="images/buy.png">

##### Demonstration of how this change to quantity is preserved in the index view.

<img src="images/post-buy-2.png">
