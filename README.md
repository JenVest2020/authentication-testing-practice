# Authentication and Testing Sprint Practice

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your practice challenge this week, you will demonstrate your mastery of these skills by creating **a weather app**.

## Introduction

In this challenge, you build an application that is trying to receive some `weather data` from San Francisco, however we are locked out.

Implement an User Authentication System. Hash user's passwords before saving the user to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as they evaluate your solution.

## Instructions

### Task 1: Project Set Up

- [X] Create a forked copy of this project
- [X] Clone your OWN version of the repository
- [X] Create a new branch: git checkout -b `<firstName-lastName>`.
- [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [X] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

- [ ] An authentication workflow with functionality for account creation and login implemented inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [ ] Middleware used to restrict access to resources for non authenticated requests. Use the file: `./auth/authenticate-middleware.js` as a starting point.
- [ ] Configuration for running tests using `Jest`.
- [ ] A **minimum of 2 tests** per API endpoint.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

### Task 3: Stretch Goals


- [ ] Write at least 4 tests per endpoint.
- [ ] Create a front end to display the weather data.
- [ ] Use a separate testing database for the endpoint tests.
- [ ] Implement authentication with the other method, if you used JWTs for MVP use sessions for stretch and vice versa.
