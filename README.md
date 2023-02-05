# Excuse Generator

A React application that generates excuses based on different categories.

## Tech Stack
- React (JSX)
- Axios

## App Structure

- `App.js` - The main component that sets up the state and renders the `Category` component
- `Category.js` - A functional component that displays the buttons for selecting a category and displays the excuse
- `App.css` - Styles for the application
- `index.html` - The HTML template for the application

## Running the Application

To run this application, you will need to have Node.js and npm installed. Once you have those, follow these steps:

1. Clone this repository.
2. Run `npm install` in the root of the project to install the dependencies.
3. Run `npm start` to start the development server.
4. Open `http://localhost:3000` in your browser to see the application.

## API Endpoint

This application uses an API endpoint `https://excuser-three.vercel.app/v1/excuse` for fetching excuses. You can fetch excuses for a specific category by adding the category name to the API endpoint: `https://excuser-three.vercel.app/v1/excuse/<category>` where `<category>` is the name of the category.

