import ArticlesTemlate from "../templates/article.hbs";
const form = document.querySelector("#search-form");
const listArticles = document.querySelector(".articles-list");
const btnLoadMore = document.querySelector(".load-more");
const searchInput = document.querySelector("#search-input");

let pageCount = 1;
const fetchNews = () => {
  const params = new URLSearchParams({
    q: searchInput.value,

    pageSize: 5,
    page: pageCount,
    apiKey: "96d073b46d494fab81e95175e71713c9",
  });
  fetch(`https://newsapi.org/v2/everything?${params.toString()}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const markup = data.articles.map((article, index) => {
        article.id = index + 1;
        if (index === data.totalResults) {
          btnLoadMore.disbled = true;
          listArticles.insertAdjacentHTML(
            "afterend",
            "<p>На цьому статті закінчились </p>"
          );
          return console.log("Кіннець");
        } else {
          return ArticlesTemlate(article);
        }
      });
      listArticles.innerHTML += markup.join("");
    })
    .catch((error) => console.log(error));
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchNews();
});
btnLoadMore.addEventListener("click", () => {
  pageCount++;
  fetchNews();
});
