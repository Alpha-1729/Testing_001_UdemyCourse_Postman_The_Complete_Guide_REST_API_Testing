/*
 * Postman CLI Command Options.
 * Reference Link : https://learning.postman.com/docs/postman-cli/postman-cli-options/
 * Reference Link : https://learning.postman.com/docs/postman-cli/postman-cli-options/#running-collections
 *
 * --bail
 *   Stops execution on the first error.
 *
 * --env-var
 *   Pass an environment variable to the collection run.
 *   postman collection run collection_id --bail --env-var "baseUrl=https://www.google.com"
 *
 * -i
 *   Run requests under a specific folder.
 *     postman collection run collection_id -i folder_id
 *   Run requests under multiple folders.
 *     postman collection run collection_id -i folder_id -i folder_id
 *   Run requests by folder name.
 *     postman collection run collection_id -i folder_name
 *   How to get the folder_id:
 *     Click on the folder → Click on the Info icon.
 *
 * --insecure, -k
 *   Turns off SSL verification and allows self-signed SSL certificates.
 *
 * --verbose
 *   Shows detailed information of the collection run and each request sent.
 */
