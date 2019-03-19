# final-project-pixels
final-project-pixels created by GitHub Classroom

## What is this application about?
This is the application which helps a user such as team manager to create his own course and give access to specific people such as his subordinates and the subordinates can access the course and learn. There will be some quizes which help team manager to assess the progress of his subordinates.

## Epics
- Registration
- Master Data Management Epic
- Login
- Contact Us 

## User Stories

### Regitration Epic
|#User Story|Scenario|User Story|
|---|---|---|
|REG1|Unregistered User should see a link to user registration|As an Unregistered User, I should be able to navigate to the main site and view the Register button so that I can create account|
|REG2|Unregistered User should be able to see the registration form|As an Unregistered User, I should be able to click on the Register button and view the registration form so that I can create my account|
|REG3|Unregistered User should be able to register and recieve confirmation email|As an Unregistered User, I should be able to fill out and submit the registration form and recieve a confirmation email|
|REG4|Unregistered User should be able to validate the account|As an Unregistered User, I should be able to verfiy my email address by clicking on the link recieved in the email|


### Master Data Management Epic
|#User Story|Scenario|User Story|
|---|---|---|
|MDM1|Admin adding a new category to the category List|As an admin, I should be able to add a new category to the category list|
|MDM2|Admin viewing the category list|As an admin, I should be able to see the category list|
|MDM3|Admin can enable/disable a category|As an admin, I should be able to disable an already enabled category or vice versa|


### Login Epic
|#User Story|Scenario|User Story|
|---|---|---|
|LOG1|User can login to the application|As an user, I should be able to log in to the application so that I can use it|
|LOG2|User can logout of the application|As an user, I should be able to logout of the application|


### User Dashboard Epic
|#User Story|Scenario|User Story|
|---|---|---|
|PM1|User can click on the add course button|As a User, I should be able to click on the Add course button so that I can add course for a category|
|PM2|User can remove the course|As a User, I should be able to select the course(s) for a category and click on the delete course button|
|PM3|User can view the enrolled courses|As a User, I should be able to view the list of enrolled courses|
|PM4|User can view the created courses|As a User, I should be able to view the list of created courses|
|PM5|User can view his homepage|As a User, I should be able to view the homepage with two sections, the first one for list of created courses and later for the list of enrolled courses|


### Create Course Epic
|#User Story|Scenario|User Story|
|---|---|---|
|CM1|User can add title for a course|As a User, I should be able to add title for the course|
|CM2|User can click to add Slides|As a User, I should be able to click on add button to add slides to the course|
|CM3|User can click to add Quiz|As a User, I should be able to click on add button to add quiz to the course|
|CM4|User can click to add Video|As a User, I should be able to click on add button to add video to the couse|
|CM6
|CM6|User can add a member|As a User, I should be able to add a member to a course|
|CM7|User can remove a member from a course|As a User,I should be able to remove a member from a course|


### Contact Us Epic
|#User Story|Scenario|User Story|
|---|---|---|
|CU1|User can make request to admin|As an user, I should be able to see a button which helps me to reach a admin|
|CU2|User can fill request form|As an user, I should be able to fill a form in order to pass the information to admin(can be request, feedback)|
|CU3|User can submit form|As a user, I can click on submit button inorder to send request to admin|
|CU4|Admin can view request List|As a admin, I can see list of requests from users|


## Services/APIs to be used in the application
- Email API: External email API to be identified and used in the application for sending emails
- Email Verification API: Verification API to send an email with a link to the user during registration (API to be identified)
- Google Material Design: Google material design API to be used for UI of the application


## Validation scenarios to be handled
- All of the text fields should have respective validation
  - Email address should follow the email address format specified
  - Password should be a combination of special characters, uppercase/lowercase characters, numbers and should not be less than 6 characters
- Email address used during registration should be unique, meaning email address should not be present in the User table


## Domain Model
Below is the domain model for the application.
![alt text](/assets/INFO-6150-DDD-Final.jpg?raw=true "Optional Title")

## Database Design
Below is the Database design for the application.
![alt text](/assets/INFO6150-Database-Design.jpg)