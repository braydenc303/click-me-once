This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

- - -

# Clicky Game

## Overview

For this assignment, you'll create a memory game with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

### Submission on BCS

* **This assignment must be deployed.** * Please submit both the deployed GitHub Pages link to your homework AND the link to the Github Repository!

### Instructions

1. Check out the [example solution](https://clicky-game.netlify.com/) and study the app's basic functionality.

2. Create a new React application using [Create React App](https://github.com/facebookincubator/create-react-app).

3. The application should render different images (of your choice) to the screen. Each image should listen for click events.

4. The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

5. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

6. Once the user's score is reset after an incorrect guess, the game should restart.

7. When complete, the application should be deployed to Github Pages. See the README generated with Create React App for instructions on deploying the application to Github Pages.

- - -

#### Minimum Requirements

* **This assignment must be deployed.** Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Github Pages and adding a README.md are required for this homework. In addition, add this homework to your portfolio. More information can be found below.

- - -

#### Hints

* Begin by building a non-functioning static version for your Clicky Game. Then work on making the game interactive.

### Reminder: Submission on BCS

* Please submit both the deployed GitHub Pages link to your homework AND the link to the Github Repository!

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

#### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**

### My Approach

1. Check out the [example solution](https://clicky-game.netlify.com/) and study the app's basic functionality.

    A. Components needed.

        1. Nav bar that links to the home page to reload from the title, Click to begin! and displays current and top scores.

        2. Header : Clicky Game! Click on an image to earn points, but don't click on any more than once! (With a background image)

        3. Image field to contain the 12 images.
            * Try to incorporate a hover effect.
        
        4. A footer with the name of the game and the React Logo.



    * Take a look at the counter and the friends activities that we have done so far in class.

    * Try to determine if there is a css library being used.



2. Create a new React application using [Create React App](https://github.com/facebookincubator/create-react-app).

    * Done.

        * Success! Created click-me-once at C:\Users\brayd\Desktop\Code\homeWork\click-me-once
        Inside that directory, you can run several commands:

        * yarn start
            * Starts the development server.

        * yarn build
            * Bundles the app into static files for production.

        * yarn test
            * Starts the test runner.

        * yarn eject
            * Removes this tool and copies build dependencies, configuration files
            and scripts into the app directory. If you do this, you can’t go back!

        * We suggest that you begin by typing:

            * cd click-me-once
            * yarn start

        * Happy hacking!

3. The application should render different images (of your choice) to the screen. Each image should listen for click events.

    * Begin by building a non-functioning static version for your Clicky Game. Then work on making the game interactive.

    * Perhaps cafe racers, or album covers.

4. The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

    * Again, take a look at the counter activity.

5. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

    * Should I shuffle the array itself, or simply shuffle a separate array of numbers to be used as indexes?

6. Once the user's score is reset after an incorrect guess, the game should restart.

    * Find out exactly what is needed here. Is anything needed besides shuffling the images and resetting the score to zero? Perhaps just saving the high score?

7. When complete, the application should be deployed to Github Pages. See the README generated with Create React App (Above) for instructions on deploying the application to Github Pages.
