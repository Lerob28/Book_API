# Part 2: Written Questions

  
-------------------------------------------

- Question 2.1: Explain your decisions:

-------------------------------------------

>  **Why did you structure your code the way you did ?** :

        I decided to structure my code like this because it is a simple application with few functionalities,
        the application is not in production, and I think that we should code as simply as possible.

> **What would you do differently in a production environment ?** :

        In a production environment, there is a lot to improve in this application.
        first of all, we can better structure the application by separating the processing
        logic from the rest of the application to have scalable code, then not display sensitive
        information on the online project repository (password, connection to the database), 
        manage users from a database and not in a file, finally name the variables correctly 
        and document the code as much as possible.

-------------------------------------------

- Question 2.2: Code Review:

-------------------------------------------

  

>  **Identify any issues or improvements that could be made to this code and explain them.**

        - request processing logic must be separated from routing management
        - when the user is registered, we must return the value for visual verification





# Part 3: Time Management


-------------------------------------------

- Task 3.1: Prioritization and Planning

-------------------------------------------


| PRIORITY      | TASK                                      | DURATION (Days)   |  REASON                                        |
|---------------|-------------------------------------------|-------------------|------------------------------------------------|            
| 1             | 1 Fix a critical bug in the               |  1                | view that the module which manages the login   |                                       
|               |   login module.                           |                   | is the gateway to any application, as long as  |
|               |                                           |                   | this module has a  critical bug no one will    |
|               |                                           |                   | be able to have access to the resources.       |
|-----------------------------------------------------------|-------------------|------------------------------------------------|                                
| 2             | 3 Document the API you                    |  1                | Documenting an API is very important to        |
|               |   developed in Task 1.                    |                   | be better exploited, so I prioritize it over   |
|               |                                           |                   | the development of a new feature.              |
|               |                                           |                   |                                                |
| ----------------------------------------------------------|-------------------|------------------------------------------------|                            
| 3             | 2 Develop a new feature that has          |  2                | the development of a new functionality can     |
|               |   been highly requested by clients.       |                   | often ake longer than expected with a          |
|               |                                           |                   | risk of breaking existing code, reason         |
|               |                                           |                   | why it is in penultimate position in           |
|               |                                           |                   | the prioritization of tasks.                   |
| ----------------------------------------------------------|-------------------|------------------------------------------------|                      
| 4             | 4 Optimize the database queries           |  1                | who speaks of optimization speaks of           |
|               |    in an existing module.                 |                   | improvement in an existing module.             |
|               |                                           |                   | which means despite the quality of the queries |
|               |                                           |                   | the program works as desired. therefore the    |
|               |                                           |                   | task can wait and be solved after the others   |
