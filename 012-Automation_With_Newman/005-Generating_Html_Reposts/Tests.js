/*
 * HTML Extra Reporter — generates HTML reports for Newman runs.
 * Reference Link : https://www.npmjs.com/package/newman-reporter-htmlextra
 *
 * Install:
 *   npm install -g newman-reporter-htmlextra
 *
 * Generate HTML report:
 *   newman run collection.json -r htmlextra
 *
 * Generate HTML and CLI report:
 *   newman run collection.json -r 'cli,htmlextra'
 *
 * Save HTML report with a custom name:
 *   newman run collection.json -r htmlextra --reporter-htmlextra-export 'newman/reports.html'
 */