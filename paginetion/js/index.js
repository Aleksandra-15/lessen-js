const btnPosts = document.querySelector(".btn-posts");
const listPosts = document.querySelector(".list-posts");

let perPage = 4;
let page = 1;
btnPosts.addEventListener("click", () => {
  const params = new URLSearchParams({
    _limit: perPage,
    _page: page,
  });

  // console.log(params);
  fetch("https://jsonplaceholder.typicode.com/posts?" + params.toString())
    .then((res) => res.json())
    .then((posts) => {
      console.log(posts);
      const newPosts = posts.map(({ id, title, body }) => {
        // const {id, title, body} = post
        const li = document.createElement("li");
        li.id = id;
        const element = (li.innerHTML = `
              
                    <h2>${title}</h2>
                    <p>${body}</p>
               `);
        return element;
        // return `
        // <li data-id=${id}>
        //     <h2>${title}</h2>
        //     <p>${body}</p>
        // </li>`
      });
      console.log(newPosts);

      // listPosts.append(...newPosts)
      listPosts.insertAdjacentHTML("beforeend", newPosts);
    });

  page++;

  if (page > 1) {
    btnPosts.textContent = "Load more";
  }
});
