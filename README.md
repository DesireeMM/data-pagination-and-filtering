# Treehouse FSJS Techdegree Unit 2 Project

Learn more about the developer on [LinkedIn](https://www.linkedin.com/in/desiree-morimoto-9470481b0/)

## Table of Contents
- [Project Description](#overview)
- [Technologies Used](#technologiesused)
- [Required Features](#requiredfeatures)
- [Additional Features](#extrafeatures)

## Project Information

#### <a name="overview"></a>Description
This project involved paginating user data to be displayed on a website. It was required that our function display 9 students (out of 42 total) per page, but that our function be flexible to handle any number of total students and students per page.

#### <a name="technologiesused"></a>Technologies Used
- JavaScript
- CSS files provided by Treehouse
- HTML file provided by Treehouse

#### <a name="requiredfeatures"></a>Required Features
- Utilize a global variable set to how many students should be displayed per page
- Create a showPage function to handle rendering student cards
  - Make the function dynamic by adding two parameters
    - list: represents an array of student objects
    - page: represents the requested page number
- Create an addPagination function to handle rendering the page buttons
  - Make the function dynamic by adding a list parameter

#### <a name="extrafeatures"></a>Additional Features to Enhance User Experience
- Dynamically added a search bar using JavaScript
  - Search filters the list in real-time using a keyup event listener
  - Search is case-insensitive and returns partial matches
  - Search results are also paginated