# Book Management Service


Book management services [Spring Boot](http://projects.spring.io/spring-boot/) app.

Here are some code review guidelines for freshers, please make sure to follow while reviewing the PRs
1. No hardcoded urls inside the code
2. No hardcoded integration keys (like Auth0) inside the code
3. No network calls inside the UI files
4. No hardcoded values inside the network call
5. Whenever a new dependency has been added to package.json or pom.xml, verify why it was added, can application run without it, Is that dependency already part of react or Spring and author was not able to use it, etc
6. Check if constructor injection can be used instead of @Autowired
7. The codes are in correct files
8.  Validate the changes made to .env or application.yaml or application.properties files
