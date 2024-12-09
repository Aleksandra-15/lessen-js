const express = require('express');
const app = express();
const PORT = 3000;

// Middleware для роботи з JSON
app.use(express.json());

//? Простий GET-запит - Отримати набір ресурсів або один ресурс

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello, this is a GET request!' });
});

//? Простий POST-запит - Створити новий ресурс


app.post('/api/message', (req, res) => {
    const { username, email, password } = req.body;
    res.json({
        response: `Received data - Username: ${username}, Email: ${email}, Password: ${password}`
    })
});

//? PUT - запит - Оновити існуючий або створити новий ресурс



let users = [
    {
        id: 1, username: "Katya", email: "katya@gmail.com"
    },
    {
        id: 2, username: "Sasha", email: "sasha@gmail.com"
    },
    {
        id: 3, username: "Andriy", email: "andriy@gmail.com"
    },
]

app.put('/api/users/:id', (req, res) => {
    // const { id } = req.params;
    const userId = parseInt(req.params.id)

    const {username, email} = req.body

    const user = users.find(user => user.id === userId)

    if(user) {
        user.username = username || user.username
        user.email = email || user.email

        res.json({message: "User updated successfully", user})
    } else {
        res.status(404).json({message: "User not found"})
    }
})

//? PATCH - Оновити існуючий ресурс


app.patch('/api/users/:id', (req, res) => {

    const userId = parseInt(req.params.id)

    const {username, email} = req.body

    const user = users.find(user => user.id === userId)

    if(user) {
        
        if(username) {
            user.username = username
        }
        if(email) {
            user.email = email
        }
        res.json({message: "User updated successfully", user})
    } else {
        res.status(404).json({message: "User not found"})
    }

})

//? DELETE - Видалити ресурс

app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id)

    res.json({message: `User with id ${userId} deleted successfully`})
})


//? HEAD - Отримати заголовки запиту

app.head('/api/users/:id', (req, res) => {

    res.set('Content-Type', 'application/json');
    res.set('Custom-Header', 'TestValue'); // Додатковий заголовок для перевірки
    res.status(200).end();
})

app.options('/api/users', (req, res) => {
    res.set("Allow", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
    res.status(200).end()
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



// Заміна {city} на місто, наприклад, "Kyiv", та {API_KEY} на ваш реальний ключ
const city = 'Kyiv';
const apiKey = '033d5285994b753646b4f4ed457d4dd0'; // замініть на свій API-ключ
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // units=metric для температури в Цельсіях

fetch(url)
  .then(res => res.json()) // перетворення відповіді в JSON
  .then(data => {
    console.log('Погода:', data);
    // Наприклад, вивести температуру:
    console.log(`Температура в місті ${city}: ${data.main.temp}°C`);
    console.log(`Опис погоди: ${data.weather[0].description}`);
  })
  .catch(err => console.error('Помилка при отриманні погоди:', err));
