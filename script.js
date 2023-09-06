var COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
var getData = function (url) {
    return fetch(url).then(function (data) { return data.json(); });
};
getData(COMMENTS_URL)
    .then(function (response) {
    response.forEach(function (item) {
        console.log('Id:', item.id, 'Email:', item.email);
    });
});
