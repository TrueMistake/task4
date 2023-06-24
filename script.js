var COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
var getData = function (url) {
    return fetch(url);
};
getData(COMMENTS_URL)
    .then(function (data) { return data.json(); })
    .then(function (response) {
    response.forEach(function (item) {
        console.log('Id:', item.id, 'Email:', item.email);
    });
});
