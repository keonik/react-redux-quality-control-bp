### Summary

(Summarize what the merge request accomplishes so it can be tested and verified. Reference issue to close)

### How was it tested?

(Describe how the fix has been tested including any interesting edge cases)

#### This MR was reviewed in the following browser:

-   [x] Chrome
-   [ ] Firefox
-   [ ] Safari
-   [ ] Edge
-   [ ] IE 11
-   [ ] IE 10
-   [ ] iOS Safari
-   [ ] iOS Chrome
-   [ ] Android Chrome
-   [ ] Android Firefox

### Possible Regression

(Any refactoring done to support this new feature)

### Static Analysis Tools

-   [ ] SonarQube
-   [ ] Lighthouse
-   [ ] Security

### Quality

-   [ ] Variable convention and naming ( camelCase or PascalCase)
-   [ ] Unnecessary code
-   [ ] ESLint rule ignores are coupled with an explanation
-   [ ] Best Practices
    -   [ ] Use `const` or `let` instead of `var`
    -   [ ] Promises are using `async` and `await`
    -   [ ] Imports organized
    -   [ ] Ternary statements aren't nested
    -   React
        -   [ ] Minimize lifting done by `render()`
        -   [ ] Minimize anonymous functions inside `render()`
        -   [ ] Variable destructuring
        -   [ ] className follows convention
        -   [ ] Unnecessary renders
        -   [ ] Consistent function declaration (either => or function)
        -   [ ] Functions are abstracted to a util file for ease of testing
    -   React > 16.7
        -   [ ] Functional components (no more class Extends Component)
        -   [ ] Prop destructuring

### Most Important !

-   [ ] Opportunity to teach
