/*
>>>> Add these in the build steps.
        newman --version
        newman run "https://api.postman.com/collections/{collection_id}?access_key=$POSTMAN_API_KEY" --reporters cli,htmlextra,junit --reporter-htmlextra-export newman/report.html --reporter-junit-export newman/report.xml
>>>> Configure the junit report in the main page.
        Open Job.
        Configuration -> Post-build Actions.
        Add post-build action -> Publish JUnit test result report.
        Open additional options and set the below path in the "Test Report XMLs"
            newman/report.xml
        Click on Save.
        Build the job.
        You can see the "Test Result Trend" chart in the main page.
        The chart include the information about the previous build.
>>>>
>>>>
>>>>
*/