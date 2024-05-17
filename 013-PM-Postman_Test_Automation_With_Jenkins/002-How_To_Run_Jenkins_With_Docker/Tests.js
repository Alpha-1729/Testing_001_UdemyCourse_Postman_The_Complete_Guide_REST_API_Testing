/*
>>>>Download and run Docker Desktop
        Reference Link: https://www.docker.com/products/docker-desktop/
>>>> Start Jenkins command:
        After installing Docker, run the following command from a terminal window to run Jenkins:
        docker run -p 8080:8080 -p 50000:50000 --restart=on-failure -v jenkins_home:/var/jenkins_home --env JAVA_OPTS="-Dfile.encoding=UTF8" vdespa/jenkins-postman
>>>> For windows:
        Download and install docker desktop.
        Start Jenkins with the above command.
        Note the password appeared in the terminal.
        Close the current terminal.
        Access the jenkins UI from the following address.
            Reference Link: http://localhost:8080/
        Install the suggested plugins.
>>>> 
>>>>
*/