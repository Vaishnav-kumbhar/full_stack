async function getcombinedData() {
  const [data1, data2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((Response) =>
      Response.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((Response) =>
      Response.json()
    ),
  ]);
  const combineData = {
    todo: data1,
    post: data2,
  };
  return combineData;
}

getcombinedData().then((data) => console.log(data));
