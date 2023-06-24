interface Post {
  id: number,
  email: string
}

const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

const getData = (url:string): Promise<Response> => {
  return fetch(url)
}

getData(COMMENTS_URL)
  .then((data) => data.json())
  .then((response:Post[]) => {
    response.forEach(item => {
      console.log('Id:', item.id, 'Email:', item.email)
    })
  });
