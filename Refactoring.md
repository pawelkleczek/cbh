# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

### Explanation of the changes to the body of the `deterministicPartitionKey` function:

- Created early return to simplify nesting and reduce the body of the function.
- Removed unnecessary variable `let candidate;`, and instead initialized candidate during its first assignment.
- Removed the second check for candidate existence and used only one if statement to check for event existence.
- Replaced nested if statements with conditional (ternary) operator for assigning candidate.
- Re-organized the control flow to reduce the number of nested blocks and make the code more readable.

### Explanation of the changes to unit tests:

- Created a series of test cases to cover all possible code paths.
- Added assertions to check length of the returned values.

Overall, the refactored function is more readable and easier to understand. By simplifying the code and removing unnecessary checks, the control flow of the function is easier to follow, making it more readable. The unit tests are also more comprehensive and help to ensure the function behaves as expected.
