console.log('before');
getRepositories('Porter', callback);
console.log('after');



function getRepositories(username, callback) {
    const repos =  ['repo1', 'repo2', 'repo3'];
    setTimeout(() => {
        callback(repos);
    }, 2000);
}

function callback(repos) {
    for (let i in repos) console.log(`repo ${i} : ${repos[i]}`)
};