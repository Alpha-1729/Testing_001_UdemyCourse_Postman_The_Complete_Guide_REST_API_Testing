/*
 * How to create a pipeline in GitLab.
 *   Create a repo in GitLab.
 *   Create a ".gitlab-ci.yml" file.
 *     yml file can be copied from the repo mentioned below.
 *     Also the collection file is also present in the repo.
 *   After this, whenever we commit a new change in the repo, the tests mentioned in the pipeline will be executed.
 *   See the attached gif to know how to view the pipeline execution.
 *
 * Repo used in the video.
 *   Reference Link : https://gitlab.com/vdespa/postman-tests/-/tree/master
 *
 * Newman Docker image.
 *   Reference Link : https://github.com/postmanlabs/newman/tree/develop/docker/
 *
 * Regarding the HTML report generated in Newman.
 *   The thing with GitLab is that every time you create files they will not be automatically
 *   saved somewhere where you can later view it. So for that reason we need to define an
 *   artifact for this job. And this can be done by using artifacts.
 */