const leftPage = document.getElementById("left")
const rightPage = document.getElementById("right")
const list = document.getElementById('posts')
const pageCurrent = document.getElementById('pageCurrent')
const btnsList = document.getElementById('paginationBtns')



const postsLimits = 5
let counterPage = 1
const URL = 'https://jsonplaceholder.typicode.com/posts?'

const renderPosts = (posts) => {
    list.innerHTML = posts.map((post) => {
        return `<li>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        </li>`
    }).join('')

}

const fetchPosts = async() => {
    const param = new URLSearchParams({
        _page: counterPage,
        _per_page: postsLimits
    })

     
    await fetch(URL + param.toString())
        .then((res) => res.json())
        .then((posts) => {
            console.log(posts);
            renderPosts(posts)


        

        })

    await fetch(URL)
        .then(res => res.json())
        .then(posts => {
            // console.log(posts)
            if (counterPage >= posts.length / 10) {
                rightPage.disabled = true
            }
            // console.log(posts.length);
            if (counterPage < posts.length / 10) {
                rightPage.disabled = false
                
            }
            renderPagination(counterPage, Math.floor(posts.length / 10))

            
        })
}


fetchPosts()


const renderPagination = (currentPage, total) => {



    btnsList.innerHTML = Array.from({length: total}, (_, i) => {
        const pageNum = i+1
        return `<li><button class='pageBtn' data-page="${pageNum}" ${pageNum === currentPage? 'disabled': ''}>${pageNum}</button></li>`
    }).join('')

    leftPage.disabled = currentPage === 1
    rightPage.disabled = currentPage === total

}


btnsList.addEventListener('click', (e) => {
    if (e.target.classList.contains("pageBtn")) {
        counterPage = +e.target.dataset.page
        fetchPosts()
    }
})

rightPage.addEventListener('click', () => {
    counterPage++
    fetchPosts()
    if (counterPage > 0 ) {
        leftPage.disabled = false
    }

})


leftPage.addEventListener('click', () => {
    counterPage--
    fetchPosts()
    if (counterPage === 0) {
        leftPage.disabled = true
    }

})