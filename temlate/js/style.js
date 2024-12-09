const person = {
  firstname: "Tehuda",
  lastname: "kats",
};
const text = document.querySelector("#person").innerHTML;

console.log(text);

const templatePerson = Handlebars.compile(text);

document.querySelector("#person-template").innerHTML = templatePerson(person);

//Person-with
const personWith = document.querySelector("#person-with").innerHTML;

const templatePersonWith = Handlebars.compile(personWith);

document.querySelector("#person-with-template").innerHTML =
  templatePersonWith(person);

const list = document.querySelector("#people-list").innerHTML;

const people = {
  people: ["Yehuda Katz", "Alan Johnson", "Charles Jolley"],
  list: [
    {
      name: "Yehuda Katz",
      age: 35,
      img: "https://pressa.rv.ua/wp-content/uploads/2023/08/milla-sofiya-3.jpeg",
    },
    {
      name: "Alan Johnson",
      age: 45,
      img: "https://static.nv.ua/shared/system/Article/posters/002/776/530/original/3ea2f2350136f1a00300dd3f83651147.jpg?q=85&stamp=20231115102752&w=600",
    },
    {
      name: "Charles Jolley",
      age: 55,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzBtcuNB5QgmNkeKrifl2p-LrSC36IdNFkTcg0NNMH3Zgyko73GWIRLoQs4cIGJiQJUB4&usqp=CAU",
    },
  ],
};

const templateList = Handlebars.compile(list);
document.querySelector("#people-list-template").innerHTML =
  templateList(people);
