const leftPage = document.getElementById("left")
const rightPage = document.getElementById("right")
const list = document.getElementById('list')

const maxUsers = 10
let page = 1

const pageCurrent = document.getElementById('pageCurrent')


const users = [
    ...Array.from({ length: 60 }, (_, i) => ({
      id: i + 1,
      name: `User${i + 1}`,
      email: `user${i + 1}@example.com`,
      age: Math.floor(Math.random() * 50) + 18,
      isActive: Math.random() > 0.5
    }))
];

const renderUsers = () => {
    const start = (page - 1) * maxUsers
    const end = start + maxUsers;

    pageCurrent.textContent = page

    const usersForRender = users.slice(start, end)
    list.innerHTML = usersForRender.map(({name, email, age, isActive}) => {
        return `<li><p>Name: ${name}</p>
        <p>email: ${email}</p>
        <p>age: ${age}</p>
        <p>isActive: ${isActive}</p>
        </li>`
    }).join('')
}



// leftPage.addEventListener('click', () => {
//     renderUsers()
//     if (page === 0) {
//         leftPage.disabled = true
//         renderUsers()


//     }else{
//         leftPage.disabled = false
//         renderUsers()

//         page--
//     }
    
//     if (page < users.length / maxUsers) {
//         rightPage.disabled = false
//         renderUsers()

  
//     }
// })


// rightPage.addEventListener('click', () => {
//     // renderUsers()
//     if (page > users.length / maxUsers) {
//         rightPage.disabled = true
//         renderUsers()

        
//     }else{
//         rightPage.disabled = false
//         renderUsers()


//         page++

//     }

//     if (page > 0) {
//         left.disabled = false
//         renderUsers()

  
//     }
// })



leftPage.addEventListener("click", () => {
    if (page > 1) {
      page--;
      renderUsers();
      leftPage.disabled = false;
    } else {
        leftPage.disabled = true;
    }
  });
  
rightPage.addEventListener("click", () => {
    if (page === users.length / maxUsers) {
      rightPage.disabled = true;
    } else {
      page++;
      renderUsers();
  
      leftPage.disabled = false;
    }
});

renderUsers()

