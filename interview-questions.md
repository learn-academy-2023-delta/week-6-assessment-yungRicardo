# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To fix the mistake you have to add a foreign key to the Student model by generating and migirating to change the tables. cohort_id will be the name of the foreign referencing the Cohort Model. The foreign key would be in the Student model so that we can refernce them to the Cohort model.

Researched answer: By generating and then migrating the foreign key, we are adding it to the existing table. Each Student model will receive a foreign key referncing their appropiate cohort with `cohort_id'

2. Which RESTful routes must always be passed params? Why?

Your answer: The routes create, update, and delete require parameters because they involve altering existing data. The params provide the crucial data that so the routes can excute properly.

Researched answer: the Create route requires params to that it can create a new entry in the database. the Update route requires params because it needs to specify which data is being modified. the Delete route must always be passed a param so that it narrows down what piece of information to remove.

3. Name three rails generator commands. What is created by each?

Your answer: rails generate model creates a migration file and model file. rails generate controller creates a controller file and view files. rails generate migration creaesta amigration file that shows changes done to the schema.

Researched answer: rails generate creates a model file with its appropiate migration file. rail generate controller generates a conrollter file with its assiocated views, helper files and routes. rails generate scaffold creates a full set of files for a resource, including a model, migration, controller, views, and routes.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

controller method would be 'index' and the action grabs and displays students

action: "POST" location: /students

controller would be 'create' and the action creates a new student based on the data entered

action: "GET" location: /students/new

controller method would be 'new' and the action renders a form to create a new student

action: "GET" location: /students/2

controller method would be 'show' and the action grabs and presents the data of a specified student with an ID 0f 2

action: "GET" location: /students/2/edit

controller method would be 'edit' and the action renders a form to modify the data of specified student with an ID of 2

action: "PATCH" location: /students/2

controller method would be 'update' and the action updates the data of specified student with an ID of 2 based of submitted form

action: "DELETE" location: /students/2

controller method would be 'destroy' and the action removes a specific student with an ID of 2. 
 
5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1. As a developer, I want to be able to create a new task, so can I add it to my to-do-list.

2. As a developer, i want to be able to to mark a task as completed, so i can track my progress

3. As a developer, I want to be able to view all my tasks, so I can see the complete list at a glance.

4. As a developer, I want to be able to edit a task, so I can modify its details or update it if needed.

5. As a developer, I want to be able to delete a task, so I can remove it from my to-do list.

6. As a developer, I want to be able to prioritize tasks, so I can focus on the most important ones first.

7. As a developer, I want to be able to organize tasks into categories or lists, so I can group related tasks together.

8. As a developer, I want to be able to set due dates for tasks, so I can stay organized and meet deadlines.

9. As a developer, I want to be able to search for specific tasks, so I can quickly find the task I need.

10. As a developer, I want to be able to mark tasks as important or add notes to them, so I can provide additional context or reminders.
