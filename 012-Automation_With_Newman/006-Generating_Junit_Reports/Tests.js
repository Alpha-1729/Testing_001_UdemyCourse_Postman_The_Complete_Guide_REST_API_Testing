/*
 * JUnit Reporter — stores test results in XML format for machine consumption.
 * Reference Link : https://github.com/postmanlabs/newman#junitxml-reporter
 *
 * Generate JUnit report:
 *   newman run collection.json -r 'cli,junit'
 *
 * Save JUnit report with a custom path:
 *   newman run collection.json -r 'cli,junit' --reporter-junit-export 'newman/reports.xml'
 */