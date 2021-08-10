# book-search-engine

![book-search-engine-demo](./media/demos/book-search-engine-demo.gif)

## Overview

In this activity, the user was given a functioning React application using REST API to be refactored to using Apollo GraphQL.

## Table of Contents

  - [Pseudocode](#pseudocode)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Links](#links)
  - [Resources](#resources)
  - [Screenshot](#screenshot)
    - [Desktop](#desktop)

## Pseudocode

1. Update server.js to implement Apollo Server.
2. Update auth.js middleware to work with GraphQL API.
3. Create typeDefs by referencing models. Specifically, create a query that returns me, a User type.
4. Create resolvers by referencing controllers.
5. Export typeDefs and resolvers using index.js in the same folder.
6. Create a query for 'me' and mutations for respective API methods.
7. Update App.js to use Apollo Provider.
8. Update Searchbooks.js, SavedBooks.js, SignupForm.js, and LoginForm.js to use mutations.

## Installation

- `npm i`

## Usage

- `npm run develop` to start the server.
- Signup.
- Search for a topic or a specific book.
- Click a "Save" button to save book.
- View saved books by clicking on the "See Your Books" link.
- Remove saved books by clicking on the corresponding delete button.

## Technologies Used

- Mongoose
- Express
- React
- Node.js
- Bootstrap

## Links

- [Deployed Site](https://budget-tracker-huirayj.herokuapp.com/)
- [Repository](https://github.com/huirayj/book-search-engine)

## Resources

- [Apollo GraphQL](https://www.apollographql.com/docs/)
- [Mutations](https://www.apollographql.com/docs/react/data/mutations/)
- [Queries](https://www.apollographql.com/docs/react/data/queries/)

## Screenshot

### Desktop

![Google Book Search Desktop](./media/screenshots/book-search-engine-desktop.png)
