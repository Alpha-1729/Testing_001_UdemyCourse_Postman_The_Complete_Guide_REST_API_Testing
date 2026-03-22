/*
 * Add the following in the Build Steps → Execute Shell:
 *   newman --version
 *   newman run "https://api.postman.com/collections/[collection_id]?access_key=$POSTMAN_API_KEY" --reporters cli,htmlextra,junit --reporter-htmlextra-export newman/report.html --reporter-junit-export newman/report.xml
 *
 * Configure JUnit report on the job page:
 *   1. Job → Configuration → Post-build Actions → Add → Publish JUnit Test Result Report.
 *   2. Open additional options → Set "Test Report XMLs" to: newman/report.xml
 *   3. Save → Build Now.
 *   4. The "Test Result Trend" chart will appear on the main page with previous build history.
 */