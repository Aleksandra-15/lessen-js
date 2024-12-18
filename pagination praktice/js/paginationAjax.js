const leftPage = document.getElementById("left");
const rightPage = document.getElementById("right");
const list = document.getElementById("posts");
const pageCurrent = document.getElementById("pageCurrent");
const ulpage = document.getElementById("paginationBtns");
const postsLimits = 5;
let counterPage = 1;
const URL = "https://jsonplaceholder.typicode.com/posts?";

const renderPosts = (posts) => {
  list.innerHTML = posts
    .map((post) => {
      return `<li>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        </li>`;
    })
    .join("");
};

const fetchPosts = async () => {
  const param = new URLSearchParams({
    _page: counterPage,
    _per_page: postsLimits,
  });

  await fetch(URL + param.toString())
    .then((res) => res.json())
    .then((posts) => {
      console.log(posts);
      renderPosts(posts);
    });

  await fetch(URL)
    .then((res) => res.json())
    .then((posts) => {
      console.log(posts);
      if (counterPage >= posts.length / postsLimits) {
        rightPage.disabled = true;
      }
      console.log(posts.length);
    });
};

fetchPosts();

const rnderPagination = (currentPage, total) => {
    btnList.innerHTML =Array.from({length: total}, (_, i)=>{
        const pageNum = i+1
        return`<li><button data-page ="${pageNum}"${pageNum === currentPage& 'disable':}`
    })
}

rightPage.addEventListener("click", () => {
  counterPage++;
  fetchPosts();
});

leftPage.addEventListener("click", () => {
  counterPage--;
  fetchPosts();
  if (counterPage === 0) {
    leftPage.disabled = true;
  }
});
