/*
>>>> Postman CLI command options.
        References Link:
            https://learning.postman.com/docs/postman-cli/postman-cli-options/
            https://learning.postman.com/docs/postman-cli/postman-cli-options/#running-collections

>>>> --bail
        If will stop execution on the first error.
>>>> --env-var
        postman collection run collection_id --bail --env-var "baseUrl=https://www.google.com"
        This variable will be resolved in the collection run.
>>>> -i 
        Run the requests under a folder.
            postman collection run collection_id -i folder_id
        Run the requests under multiple folders.
            postman collection run collection_id -i folder_id -i folder_id
        How to get the folder id.
            Click on the folder.
            Click on the info icon to get the folder id.
        Run requests with folder name.
            postman collection run collection_id -i folder_name
>>>> --insecure, -k
        Turn off SSL verification checks and allows self-signed SSL certificates.
>>>> --verbose
        Shows detailed information of collection run and each request sent.    
>>>>    
>>>>    

*/