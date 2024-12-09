// Розглянемо, як можна зробити GET запит до публічного API. Для цього скористаємося The Movie Database (TMDb) API. В прикладі будемо використовувати JavaScript та fetch для виконання запиту і отримання списку популярних фільмів.

// 1. Реєстрація та отримання ключа API
// Перш за все, потрібно зареєструватися на сайті TMDb і отримати API ключ. Ключ використовуватимемо для авторизації при запитах до сервера.

// 2. Виконання GET запиту з використанням fetch
// Припустимо, що ви вже маєте API ключ, який будемо підставляти в запит.

// Код прикладу:


// Ваш API ключ від TMDb
// const apiKey = '27ab135d39ef26eeae2c018d3fe0b5a5';

// // URL запиту до API, щоб отримати популярні фільми
// const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
// const movieList = document.querySelector('.movie-list');
// // Виконуємо запит до API
// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();  // Перетворюємо відповідь в JSON
//   })
//   .then(data => {
//     console.log('Список популярних фільмів:', data.results); // Отримуємо масив з результатами
//     // Наприклад, виведемо назви фільмів у консоль
//     data.results.forEach(movie => console.log(movie.title));

//     data.results.forEach(movie => {
//       const li = document.createElement('li');
//       li.innerHTML = `
//         <h2>${movie.title}</h2>
//         <p>${movie.overview}</p>
//         <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
//       `;
//       movieList.appendChild(li);
//     })

//   })
//   .catch(error => {
//     console.error('Сталася помилка:', error);
//   });


//   Конструювання URL запиту: URL містить основний шлях до API, кінцеву точку (/movie/popular), API ключ і параметри (language=en-US та page=1).

//   Запит через fetch:

//   fetch(url) виконує GET запит.
//   response.json() – метод, який перетворює відповідь у формат JSON.
//   Обробка даних:

//   Після отримання даних ми отримуємо об'єкт data, який містить масив results із популярними фільмами.
//   data.results.forEach(movie => console.log(movie.title)) – перебираємо масив і виводимо назви фільмів у консоль.

// var url2 = 'https://newsapi.org/v2/everything?' +
//   'q=Apple&' +
//   'from=2024-14-05&' +
//   'sortBy=popularity&' +
//   'apiKey=c6acdfb593fa40b4a2dc2491b8b085de';

// // var req = new Request(url2);


// const list = document.querySelector('.list');
// fetch(url2)
//   .then((response) => {
//     return response.json()
//   })
//   .then(data => {
//     console.log(data);

//     data.articles.forEach(item => {

//       if(item.content === "[Removed]"){
//         return
//       }
//       const li = document.createElement('li');
//       li.innerHTML = `
//         <h2>${item.title}</h2>
//         <p>${item.description}</p>
//         <a href="${item.url}">Read more</a>
//       `;
//       list.appendChild(li);
//     })

//     console.log(data.status);
//   })



// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2FiMTM1ZDM5ZWYyNmVlYWUyYzAxOGQzZmUwYjVhNSIsIm5iZiI6MTczMDg0MDA2MS44OTI1MjIzLCJzdWIiOiI2NzJhNzA5NzE0ZDRhMzk5NzIwMzVkNzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.88-g2XCTj0Bm1FdCuijUzSJy5GwdME7ypLIpLELFCWg'
//   }
// };

// fetch('https://api.themoviedb.org/3/authentication', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));


fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json()) // перетворення відповіді в JSON
    .then(countries => {
        console.log('Список країн:', countries);
    })
    .catch(err => console.error('Помилка при отриманні країн:', err));

const searchCountry = document.querySelector('.search-country');
const country = document.querySelector('.country');
searchCountry.addEventListener('input', () => {
    const countryName = searchCountry.value;
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => res.json())
        .then(countries => {
            console.log('Список країн:', countries);
            country.innerHTML = countries[0].name.common;
        })
        .catch(err => console.error('Помилка при отриманні країн:', err));
})



// Заміна {city} на місто, наприклад, "Kyiv", та {API_KEY} на ваш реальний ключ
const inpValue = 'Koblenz';
const apiKey = 'f1197b193ebc6cbadc826d82bef13bd1'; // замініть на свій API-ключ
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inpValue}&appid=2316c7a3882a463fe5446a56989b42cc`; // units=metric для температури в Цельсіях


https://api.openweathermap.org/data/2.5/weather?q=${inpValue}&appid=2316c7a3882a463fe5446a56989b42cc&units=metric

fetch(url)
  .then(res => res.json()) // перетворення відповіді в JSON
  .then(data => {
    console.log('Погода:', data);
    // Наприклад, вивести температуру:
    console.log(`Температура в місті ${city}: ${data.main.temp}°C`);
    console.log(`Опис погоди: ${data.weather[0].description}`);
  })
  .catch(err => console.error('Помилка при отриманні погоди:', err));


