console.log('Before');
getUser(1, (user)=> {
    console.log('User: ', user);
    getRepositories(user.gitHubUsername, (repos)=> {
        console.log('Repositories: ', repos);
    });
});
console.log('After');

function getUser(id, callback){
    setTimeout(()=> {
        console.log('Reading a user from a database...');
        callback({id: id, gitHubUsername: 'kumail'});
    }, 2000);
}

function getRepositories(username, callback){
    setTimeout(()=> {
        console.log('Calling GitHub API...');
        callback(['Repo1','Repo2','Repo3']);
    }, 2000);
}