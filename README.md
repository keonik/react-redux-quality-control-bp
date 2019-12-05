App built on top of `create-react-app` utilizing react-redux hooks, eslint, prettier, and more.

## Getting Started

To start your development environment you will need [nodejs](https://nodejs.org/en/) which comes with [npm](https://www.npmjs.com/) to run the necessary commands to get started

Simply run:

1. `npm install` - installs all dependencies in `package.json`
2. [`npm run start`](#npm-start)

You should see a browser launch your frontend application hosted on port `3000` or the next available port

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br> Open [http://localhost:3000](http://localhost:3000) to view it in the browser

The page will reload if you make edits.<br> You will also see any lint errors in the console

### `npm test`

Auto runs tests and generates coverage files for sonar-qube and cli viewing

### `npm run lighthouse`

Run's Google Lighthouse in browser testing tool

### `npm run lint`

Runs eslint and sass-lint checks to improve code quality

### `npm run format`

The format script runs two cleanup services to help maintain your code quality

1. `prettier` to format code according to `.prettierrc`
2. `eslint --fix` to attempt at auto resolve eslint errors

Not all eslint errors will be resolved by the format script

### `npm run prettier`

Runs `prettier` code formatting tool to see if all files have been formatted

### `npm run release`

Runs `standard version --no-verify` which will auto generate change log updates based on commit messages making it easier to track changes in your `master` branch

### `npm run security`

Runs `npm audit` and `npm outdated` to see if your program has outdated dependencies or potential security vulnerabilities

### `npm run build`

Builds the app for production to the `build` folder.<br> It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br> Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
