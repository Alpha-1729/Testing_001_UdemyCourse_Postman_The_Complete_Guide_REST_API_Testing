/*
>>>> Junit reporter.
        Reference Link: https://github.com/postmanlabs/newman#junitxml-reporter
        Junit report is store in an xml format.
        This report is intended for programmatically reporting the test results. It is essentially intended for consumption of a machine.
>>>> Generating Junit reports.
        newman run collection.json -r 'cli,junit' 
>>>> Setting report path for junit.
        newman run collection.json -r 'cli,htmlextra' --reporter-junit-export 'newman/reports.xml'
>>>>
>>>>
*/