# Book_API

> a simple REST API using Express.js 
which performs CRUD operations to manage a list of books.

the project stores data in a MongoDb cluster database.



## prerequisites
> Before cloning or downloading this project, make sure you have
nodejs and npm on your computer.

## How to launch the project?
    follow the steps below to launch the project locally

    - clone the project
    - open the project in an IDE such as **vs code**. 
    - open a terminal in the project folder and type **npm install**: this command will download all the dependencies for your project
    - still in the terminal, type **node server** to start the server
    - if the project starts successfully, you'll see in the console the port on which your server is listening for requests.
    - you can use a tool like **postman** to test the **API**. 


## TEST API
 Let's say the server is running on port **5000** on your computer, and the endpoints you get are :

 > 
        - GET http://localhost:**5000**/api/books --- to obtain the list of books
        - PUT http://localhost:**5000**/api/book/edit/:id --- to update a book with its identifier
        - POST http://localhost:**5000**/api/book/add --- to create a new book
        - DELETE http://localhost:**5000**/api/book/edit/:id --- to update a book with its id

## Book template
Before creating a book, you need to provide the following attributes:
- title: The title of the book (String)
- author : The author of the book (String)
- publishedDate: The date on which the book was published (String)


 **Note:** each access point is protected by a **JWT Bearer Token**, so you must be authenticated before accessing the access points.

 - **POST** http://localhost:**5000**/api/auth --- to authenticate the user
 
 > users : [ { username : **john@gmail.com**, password: **john** } or { username: **jane@gmail.com**, password : **jane**} ]