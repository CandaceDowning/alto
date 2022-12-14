# Candace Downing's Submission for Alto

## Purpose
A front end code exercise to be submitted for interview process. 

## General Notes

### Successes
- Set up react routing to make it easier to navigate views. I saw the icon for the navigation, so I maybe did more than neccessary.

- Used React Styled components and set up a small theme.

- Created a favicon using the alto logo by giving it a background color and converting to an .ico file

### Challenges
- Updated the mission.json file to pull images from the public folder for easier access.

- Chose not to use the logo asset for the navigation header because it was too grainy. However, I couldnt find a matching font, so I ended up going with the Optimal Medium since the 'A' matched the best, but there was no option that had an offset thiness to the 'O'.

- Had some difficulty guessing layouts since the designs were not inspectable.

- More colors and fonts given than needed, so used best judgement.

- This project took longer than I thought it would. I may have made it more complicated than it needed to be.

- Had a very difficult time getting image paths pulled from the json file to work with both the local dev environment, and the deployed GHPages site. Created a helper function to append the deployed url to the path if not in a dev environement to pull the image from the public folder, and use the local image path if in a dev environment.

## Style Guide
Created to assist in development, and used the disabled appearance navigation item as the link. It is still styled as a disabled element, but will link. 

## To View Project On Github Pages
- Go to [https://candacedowning.github.io/alto](https://candacedowning.github.io/alto)
- click one of the navigation links to view a page within the project (use the bubbles on the top right on mobile, and the links on desktop)

## To Run Project
- Clone from repo.
- Navigate to the root file 'alto'.
- Use command ### `npm start` to run project.
- A browser window will open at localhost:3000, and you will see the style guide view first.
- If in mobile view, the navigation bubbles at the right will take you to the four views, which are orderd by name on the mock ups.
- In in desktop view, the navigation items at the top will take you to the four views, and are text based.


