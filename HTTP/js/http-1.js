const KEY = "96d073b46d494fab81e95175e71713c9";

const url = `https://newsapi.org/v2/everything?q=Apple&from=2024-11-05&sortBy=popularity&apiKey=`;
/* var req = new Request(url); */

fetch(url).then(function (response) {
  console.log(response.json());
});

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmQyMzc4OGYyN2YwNDQ5MDI0N2ZjNjQyODE3ZjQ3NiIsIm5iZiI6MTczMDkxNjYzOC45NzI1NDI4LCJzdWIiOiI2NzJiYWM4YWFkY2EzMDc5MjUxNDQ3YjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.A2NkTsye3gRAw2Y3GBhTueSUsKautBUe85JIHB8Ic-c",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options
)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
