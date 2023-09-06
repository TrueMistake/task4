interface Post {
  postId: number;
  id:     number;
  name:   string;
  email:  string;
  body:   string;
}

const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

const getData = (url:string): Promise<Post[]> => {
  return fetch(url).then((data) => data.json())
}

getData(COMMENTS_URL)
  .then((response:Post[]) => {
    response.forEach((item:Post):void  => {
      console.log('Id:', item.id, 'Email:', item.email)
    })
  });
