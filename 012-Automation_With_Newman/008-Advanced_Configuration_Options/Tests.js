/*
 * Newman Command Line Options.
 * Reference Link : https://github.com/postmanlabs/newman#command-line-options
 *
 * --bail
 *   Stops execution at the first error.
 *   newman run https://api.postman.com/collections/[collection_id]/?apikey=[api_key] --bail
 *
 * --env-var
 *   Set an environment variable directly.
 *   newman run https://api.postman.com/collections/[collection_id]/?apikey=[api_key] --env-var="baseUrl=https://www.google.com"
 *
 * --folder <name>
 *   Specify the folder name to run.
 *   newman run https://api.postman.com/collections/[collection_id]/?apikey=[api_key] --folder "Happy Path"
 *
 * --insecure, -k
 *   Disables SSL verification checks.
 *
 * --verbose
 *   Shows detailed information about the collection run.
 */