# TrainingExercise
This project is a Web Application that consumes REST services from the [GitHub API](https://developer.github.com/v3/).
A list of users is displayed in the format of cards. There are 4 cards per row, and each card displays the profile picture, the username, the external link that opens up the github profile, and a button that shows a list of the repositories that the user has in a similar card format.

Using routing navigation by URL, each repository card will have the name, the description, the external link that opens up the github repository page, and the number of open issues and forks that this repository has.
If the user has no repositories, the button of repositories in the user card will redirect to a page that shows a warning saying that the user has no repositories, and a button that shows the original list of users again.

The first time a user opens the application, it will retrieve the list of users, and this list will be stored on cache memory for a period of time of 2 hours. During this time, if the user wants to see the list of users agan, it will be retrieved from the internal local storage to increase performance.

## Technologies Used
* Angular

Angular CLI version 10.2.0 was used to build this project. 

For further information about Angular framework click [here](https://angular.io/docs).

* Bootstrap

Bootstrap v4.5.3 was used for the styling of the pages. 

For further information about Bootstrap click [here](https://getbootstrap.com/docs/4.5/getting-started/introduction/).

* NodeJS

NodeJS is used to install the various modules and dependencies required to build this project.

Node 12.19.0 is the version used in this project.
For further information about Bootstrap click [here](https://nodejs.org/es/docs/).

## Instructions for running the application
1. Download the repository.
2. Donload NodeJs if not installed yet.
3. Open a command terminal on the downloaded folder.
4. Run the command to install all dependencies.
```
npm install
```
5. Once all dependencies are installed, we can use Angular CLI to run the project on a web browser tab.
```
ng serve --open
```

## Ways to improve
* Implementing Unit testing
* Improve styling on the cards

