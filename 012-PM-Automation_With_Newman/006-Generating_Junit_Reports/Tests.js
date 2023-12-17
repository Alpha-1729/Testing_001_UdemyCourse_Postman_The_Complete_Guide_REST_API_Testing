/*
>>>> Junit reporter.
        Reference Link: https://github.com/postmanlabs/newman#junitxml-reporter
        Junit report is store in an xml format.
>>>> Generating Junit reports.
        newman run collection.json -r 'cli,junit' 
>>>> Setting report path for junit.
        newman run collection.json -r 'cli,htmlextra' --reporter-junit-export 'newman/reports.xml'
>>>>
>>>>
*/