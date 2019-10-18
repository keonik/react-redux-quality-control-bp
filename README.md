App built on top of `create-react-app` utilizing redux, eslint, prettier, and more. Be sure to utilize sonarqube as well to monitor your code quality prior to releases.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br> You will also see any lint errors in the console.

### `npm test`

Auto runs tests and generates coverage files for sonar-qube and cli viewing.

### `npm run lighthouse`

Run's Google Lighthouse in browser testing tool

### `npm run lint`

Runs eslint and sass-lint checks to improve code quality.

### `npm run format`

Runs eslint to auto fix potentially resolvable issues from cli.

### `npm run prettier`

Runs `prettier` code formatting tool to see if all files have been formatted.

### `npm run format:eslint`

Runs `eslint --fix` to attempt at auto resolve eslint errors

### `npm run format:prettier`

Runs `prettier` to format code according to `.prettierrc`

### `npm run release`

Runs `standard version --no-verify` which will auto generate change log updates based on commit messages making it easier to track changes in your `master` branch.

### `npm run sonar`

Runs `sonar-scanner` to send code quality analysis information to Mile Two's [Sonar Qube](http://sonar.mile-two.com) instance.

### `npm run build`

Builds the app for production to the `build` folder.<br> It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br> Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
