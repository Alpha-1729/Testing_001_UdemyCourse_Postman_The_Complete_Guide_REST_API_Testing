/*
>>>> Use html extra for creating html reports.
        Reference Link: https://www.npmjs.com/package/newman-reporter-htmlextra
        npm install -g newman-reporter-htmlextra        
>>>> Generate report using html extra.
        newman run collection.json -r htmlextra
>>>> Generate html and cli report.
        newman run collection.json -r 'cli,htmlextra'
>>>> Saving html report using a custom name.
        newman run collection.json -r htmlextra --reporter-htmlextra-export 'newman/reports.html'
>>>>
*/