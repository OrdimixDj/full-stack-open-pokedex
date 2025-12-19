I choose Java to code my application with.
For my CI setup, I choose these tools:
- for linting: **Checkstyle** because it's a lightweight and standalone tool that can be integrated directly in the IDE to get a real-time feedback. You also can use existing configurations from Google or Sun, for example)
- for testing: **JUnit 5**, which is the most modern and used testing framework for Java, it's useful to manage several tests through differents files to let the test subject being more logical.
- for building: **Maven** is a build automation tool based on the Project Object Model, which manages everything: it collects libraries to package the project into an executable, and also can automatically generate documentation.

I could have replaced Github actions by GitLab CI/CD, because:
- it's an all-in-one platform where I can manage version control and automation simultaneously on the same interface
- it can automatically detect the code language and generate build and basic test configurations.

I choose the example of a multi simple games application: for that example, I would prefer to use a cloud-based environment, because of the simplicity of using multi containers to run all tests simultaneously.
The information I would need to make a decision are:
- price: depending on the project size, it can me more interesting to use one of the environment instead of the other one
- amount of games in that multi-games application: depending of that amount, it can me slower to use the cloud environmnent, or vice-versa
- what are the games / which type: we will need more hardware resources for a advanced game than for a hangman game