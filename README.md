Mile Two App built on top of `create-react-app`

## Getting Started

Install dependencies `npm install` and run `npm run start`

To validate tests run `npm run test`

To validate quality run `npm run lint`, `npm run lighthouse`, and `npm run security`

To use Mile Two's SonarQube static anaylsis tool, run `npm run sonar` and go to [Mile Two SonarQube](http://sonar.mile-two.com/projects)

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.<br> It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br> Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### `npm run lighthouse`

Lighthouse will generate an accessability and performance snapshot of your site as it pertains to the browser.

### `npm run lint`

Runs eslint and sass-lint checks to improve code quality.

### `npm run format`

Runs eslint and sass-lint to auto fix potentially resolvable issues from cli.

### `npm run release`

Runs `standard version --no-verify` which will auto generate change log updates based on commit messages making it easier to track changes in your `master` branch.

### `npm run security`

The security script will run `npm audit`, `npm outdated`, and `depcheck`. These tools check for potential known security vulnerabilities that can be updated, any outdated packages relative to your dependencies, and any unused packages respectively.

### `npm run sonar`

Runs `sonar-scanner` to send code quality analysis information to Mile Two's [Sonar Qube](http://sonar.mile-two.com) instance.

### `npm start`

Runs the app in the development mode.<br> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br> You will also see any lint errors in the console.

### `npm test`

Auto runs tests and generates coverage files for sonar-qube and cli viewing.
