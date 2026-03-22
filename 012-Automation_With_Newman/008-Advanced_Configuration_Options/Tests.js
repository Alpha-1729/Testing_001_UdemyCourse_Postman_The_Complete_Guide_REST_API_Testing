/*
>>>> Newman command line options.
        Reference Link: https://github.com/postmanlabs/newman#command-line-options
>>>> --bail
        newman run https://api.postman.com/collections/[collection_id]/?apikey=[api_key] --bail
        Execution stops at the first error.
>>>> --env-var
        Setting an environment variable directly.
        newman run https://api.postman.com/collections/[collection_id]/?apikey=[api_key] --env-var="baseUrl=https://www.google.com"
>>>> --folder <name>
        Specify the folder name.
            newman run https://api.postman.com/collections/[collection_id]/?apikey=[api_key] --folder "Happy Path"
>>>> --insecure, -k
        Disable the SSL verification checks.
>>>> --verbose
        Show detailed information about collection run.
*/