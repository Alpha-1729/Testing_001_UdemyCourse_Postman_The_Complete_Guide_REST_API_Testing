/*
 * Download and run Docker Desktop.
 * Reference Link : https://www.docker.com/products/docker-desktop/
 *
 * Start Jenkins command:
 *   docker run -p 8080:8080 -p 50000:50000 --restart=on-failure -v jenkins_home:/var/jenkins_home --env JAVA_OPTS="-Dfile.encoding=UTF8" vdespa/jenkins-postman
 *
 * Jenkins Docker image reference:
 * Reference Link : https://github.com/vdespa/jenkins-postman
 *
 * For Windows:
 *   1. Download and install Docker Desktop.
 *   2. Run the above command from a terminal.
 *   3. Note the password printed in the terminal.
 *   4. Access Jenkins UI at http://localhost:8080/
 *   5. Install suggested plugins.
 *   6. Create an admin user.
 */