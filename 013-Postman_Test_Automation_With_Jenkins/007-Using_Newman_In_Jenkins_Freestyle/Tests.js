/*
 * Create a Freestyle job in Jenkins.
 *   - Open Build Steps → Select Execute Shell.
 *   - Use Secret Text to store the Postman API key.
 *   - Add the following commands:
 *       newman --version
 *       newman run "https://api.postman.com/collections/[collection_id]?apikey=$POSTMAN_API_KEY"
 *
 * ⚠️ Always wrap the URL in double quotes.
 */