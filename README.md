# Angular Technical Test

## Instructions

* Create a web application in Angular that consumes [Github API](https://docs.github.com/en/rest) and meets the requirements in the section below.
* Although not mandatory, we will really appreciate it if you are willing to spend some extra time and complete as much bonus points as possible.
* Push your new repository in your Github account
* Send us the links to your Github repository and the deployed application

## Requirements
* There must be a search bar to let the user search by username (login name)
* After the search is completed, the application displays the list of users along with their avatar and their username on the same page. To simplify the exercise, in case there are too many results you can limit them at a certain maximum.
* When a list item is clicked, the application navigates to a new page that displays a simple list with all the user details.
* The new page will also display the list of the user's repositories and followers.
* The application has to be responsive and optimized for mobile
* Documentation on how the application works and how to set up and build the project must be provided
* Make sure that the application is production ready.

## Bonus points
* The search input does the searching as you type (See google search as an example)
* There is animated transition between pages
* The application supports theming and can easily be switched between themes
* The application style is built by one of the CSS preprocessors or CSS-in-JS

## Expected solution
* Properly meets all the requirements
* All pages' URL is reusable - meaning it can be copied and pasted on different browser and still shows the same result
* The project supports code splitting for each pages by properly using the Angular components.
* Analyse that the app is production ready by using Google’s PageSpeed or Lighthouse.


## Deploy server

Run `ng build --prod` and then `npm start` for a server. Navigate to `http://localhost:8080/`.

## Heroku App

The last version of the app is live on [https://nuvolar.herokuapp.com/](https://nuvolar.herokuapp.com/).

## Docker image
Docker image can be found on [https://hub.docker.com/repository/docker/rossifranco/nuvolar-test](https://hub.docker.com/repository/docker/rossifranco/nuvolar-test) or you can pull it runing `docker pull rossifranco/nuvolar-test:latest` and then `docker container run -p 8080:80 "image-name"`.

