// 1) ФИЛЬМ
class Film {
  constructor(title, film_ID,  genre, persons, production, price, amount, type ) {
    this.title = title
    this.film_ID = film_ID
    this.genre = genre
    this.persons = persons
    this.production = production
    this.price = price
    this.amount = amount
    this.buys = 0
    this.favs = 0
    this.type = type
  }
}

// 2) КЛИЕНТ
class Client {
  constructor(name, client_ID) {
    this.name = name
    this.client_ID = client_ID
    this.client_cart = []
    this.favorites = []
    this.sum = 0
  }

  // Вывод информации о клиенте
  print_client() {
    console.log(
      this.name,
      this.client_id,
      this.client_cart,
      this.favorites,
      this.sum
    )
  }

  // Доб. в корзину
  add_cart(film, shop_cart) {
    this.client_cart.push(film)
    this.sum += film.price
    shop_cart.add_shop_cart(film)
    return this.client_cart
  }
  // Уд. из корзины
  del_cart(film, shop_cart) {
    let i = this.client_cart.indexOf(film)
    this.sum -= film.price
    this.client_cart.splice(i, 1)
    shop_cart.del_shop_cart(film)
    }
    // Доб. в избранное
    add_fav(film, favs) {
      this.favorites.push(film)
      favs.add_favorites(film)
      return this.favorites
    }
    // Уд. ид избранного
    del_fav(film, favs) {
      let i = this.favorites.indexOf(film)
      this.favorites.splice(i, 1)
      favs.del_favorites(film)
      }
}

// 3) ЖАНР
class Genre {
  constructor(title) {
    this.title = title
  }
}

// 4) ПРОИЗВОДСТВО
class Production {
  constructor() {
    this.production_arr = []
  }
  print_production() {
    console.log('Все компании: ', this.production_arr)
  }

  // Добавить компанию в список
    add_production(title, country) {
    this.production_arr.push([title, country])
    return this.production_arr
  }

  // Удалить компанию из списка
  del_production(title, country) {
    let i = this.production_arr.indexOf([title, country])
    this.production_arr.splice(i, 1)
    }
}

// 5) ПЕРСОНЫ
class Persons {
  constructor() {
    this.persons_arr = []
  }
  print_persons() {
    console.log('Все актеры: ', this.persons_arr)
  }

  // Добавить персону в список
    add_persons(name) {
    this.persons_arr.push(name)
    return this.persons_arr
  }

  // Удалить персону из списка
  del_persons(name) {
    let i = this.persons_arr.indexOf(name)
    this.persons_arr.splice(i, 1)
    }
}

// 6) ИЗБРАННОЕ
class Favorites {
  constructor() {
    this.favorites_arr = []
  }
  print_favorites() {
    console.log('Список "Избранное": ', this.favorites_arr)
  }

  // Добавить в избранное
    add_favorites(film) {
    this.favorites_arr.push(film)
    film.favs++
    return this.favorites_arr
  }

  // Удалить из избранного
  del_favorites(film) {
    let i = this.favorites_arr.indexOf(film)
    this.favorites_arr.splice(i, 1)
    }
}

// 7) КОРЗИНА
class Shop_cart {
  constructor() {
    this.shop_cart_arr = []
    this.sum = 0
  }
  print_shop_cart() {
    console.log('Список "Корзина": ', this.shop_cart_arr)
  }

  // Добавить в корзину
    add_shop_cart(film) {
    this.shop_cart_arr.push(film)
    this.sum += film.price
    return this.shop_cart_arr
  }

  // Удалить из корзины
  del_shop_cart(film) {
    let i = this.shop_cart_arr.indexOf(film)
    this.sum -= film.price
    this.shop_cart_arr.splice(i, 1)
    }
}

// 8) СПИСОК КЛИЕНТОВ
class Client_list {
  constructor() {
    this.clients_arr = []
  }

  print_clients() {
    console.log('Все клиенты: ', this.clients_arr)
  }

  // Добавить клиента
    add_client(client) {
    this.clients_arr.push(client)
    return this.clients_arr
  }

  // Удалить клиента
  del_client(client) {
    let i = this.clients_arr.indexOf(client)
    this.clients_arr.splice(i, 1)
    }
}

// 9) УПРАВЛЕНИЕ ФОНДОМ
class Fund_Control {
  constructor() {
    this.films_arr = []
    this.total_income = 450000
  }
  print_film() {
    console.log('Все товары: ', this.films_arr)
  }

  // Добавить фильм в список
  add_film(film) {
    this.films_arr.push(film)
    return this.films_arr
  }

  // Удалить фильм из списка
  del_film(film) {
    let i = this.films_arr.indexOf(film)
    this.films_arr.splice(i, 1)
    }

  // Изменить атрибут фильма на новое значение
  edit_film(film, attribute, value) {
    film[attribute] = value
  }

  // Купить фильм
  buy(shop_list) {
    for (var i = 0; i < shop_list.shop_cart_arr.length; i++) {
      if (shop_list.shop_cart_arr[i].amount > 0 ) {
      shop_list.shop_cart_arr[i].amount--
      shop_list.shop_cart_arr[i].buys++
      this.total_income += shop_list.shop_cart_arr[i].price
      }
      if (shop_list.shop_cart_arr[i].amount == 0 ) {
        this.del_film(shop_list.shop_cart_arr[i])
      }
    }
  }
}

// 10) СТАТИСТИКА
class Statistics {
  constructor() {

  }

  // Кол-во покупок
  stat_buys(film) {
    return(film.buys)
  }

  // Кол-во избранного
  stat_favs(film) {
    return(film.favs)
  }

  // Кол-во товаров
  stat_films(Fund_Control) {
    return('Кол-во фильмов: ' + Fund_Control.films_arr.length)
  }

  // Кол-во клиентов
  stat_clients(Client_list) {
    return('Кол-во клиентов: ' + Client_list.clients_arr.length)
  }

  stat_income(Fund_Control) {
    return('Общая прибыль: ' + Fund_Control.total_income)
  }
}


// ТЕСТЫ

// СОЗДАНИЕ ФОНДА

// ЖАНРЫ
genre_list = new Genre([
  'Комедия',      // 0
  'Боевик',       // 1
  'Детектив',     // 2
  'Ужасы',        // 3
  'Мелодрамма',   // 4
  'Фантастика'    // 5
])

// КОМПАНИИ
production_list = new Production()
production_list.add_production('Amazon', 'США')         // 0
production_list.add_production('NETFLIX', 'США')        // 1
production_list.add_production('RADiUs-TWC', 'США')     // 2

// АКТЕРЫ
persons = new Persons ()
// 0
persons.add_persons({'Том Круз':[' Главная роль', ' Актер второго плана', ' Продюссер', ' Режиссер']})
// 1
persons.add_persons({'Джеймс Кэмерон':[' Продюссер',' Сценарист',' Монтажер']})
// 2
persons.add_persons({'Ридли Скотт':[' Продюссер',' Сценарист', " Оператор"]})
// 3
persons.add_persons({'Леонардо ДиКаприо':[' Главная Роль',' Сценарист']})
// 4
persons.add_persons({'Квентин Тарантино':[' Актер второго плана',' Сценарист',' Режиссер',' Монтажер']})
// 5
persons.add_persons({'Ума Турман':[' Главная роль',' Продюссер']})
// 6
persons.add_persons({'Сигурни Уивер':[' Главная роль',' Актер второго плана', ' Продюссер']})
// 7
persons.add_persons({'Брайан Де Пальма':[' Главная роль',' Режиссер', ' Монтажер']})

// ФИЛЬМЫ [название, ID, жанр, персоны, компания, цена, количество, формат]
fund = new Fund_Control()
// оператор расширения
film1 = new Film("Криминальное Чтиво", 1,
genre_list.title[0],
[[...Object.keys(persons.persons_arr[4]),Object.values(persons.persons_arr[4])[0][2]],
[...Object.keys(persons.persons_arr[5]),Object.values(persons.persons_arr[5])[0][0]]],
production_list.production_arr[0],
1000, 10, 'VHS')
fund.add_film(film1)

film2 = new Film("Чужой", 2,
genre_list.title[3],
[[...Object.keys(persons.persons_arr[2]),Object.values(persons.persons_arr[2])[0][1]],
[...Object.keys(persons.persons_arr[6]),Object.values(persons.persons_arr[6])[0][0]]],
production_list.production_arr[1],
200, 5, 'VHS')
fund.add_film(film2)

film3 = new Film("Аватар", 3,
genre_list.title[5],
[[...Object.keys(persons.persons_arr[1]),Object.values(persons.persons_arr[1])[0][1]],
[...Object.keys(persons.persons_arr[6]),Object.values(persons.persons_arr[6])[0][1]]],
production_list.production_arr[2],
303, 1, 'S-VHS')
fund.add_film(film3)

film4 = new Film("Титаник", 4,
genre_list.title[4],
[[...Object.keys(persons.persons_arr[1]),Object.values(persons.persons_arr[1])[0][0]],
[...Object.keys(persons.persons_arr[3]),Object.values(persons.persons_arr[3])[0][0]]],
production_list.production_arr[0],
444, 3, 'VHS-C')
fund.add_film(film4)

film5 = new Film("Миссия: Невыполнима", 5,
genre_list.title[1],
[[...Object.keys(persons.persons_arr[7]),Object.values(persons.persons_arr[7])[0][1]],
[...Object.keys(persons.persons_arr[0]),Object.values(persons.persons_arr[0])[0][0]]],
production_list.production_arr[1],
5550, 11, 'VHR')
fund.add_film(film5)



// Регистрация клиентов
client_list = new Client_list()
client1 = new Client('Олег Черепанов', 1)
client_list.add_client(client1)
client2 = new Client('Андрей Семахин', 2)
client_list.add_client(client2)
client3 = new Client('Аркадий Медведев', 3)
client_list.add_client(client3)
client4 = new Client('Владимир Путин', 4)
client_list.add_client(client4)
client5 = new Client('Барак Обама', 5)
client_list.add_client(client5)

shop_cart1 = new Shop_cart()
favorites1 = new Favorites()

statistics = new Statistics()

film_id = 5
// Функции "Реестра"
// Вывод элементов в списках
function init() {
  persons_list = document.getElementById("persons_list")
  persons.persons_arr.forEach((name, i) => {
    optgroup = document.createElement("optgroup")
    optgroup.setAttribute('label',Object.keys(name)[0])
    persons_list.appendChild(optgroup)
    Object.values(name)[0].forEach((item, i) => {
      option = document.createElement("option")
      option.setAttribute('value', item)
      option.innerHTML = item
      optgroup.appendChild(option)
    });
  });

  genre_li = document.getElementById("genre_list")
  genre_list.title.forEach((title, i) => {
    option = document.createElement("option")
    option.innerHTML = title
    genre_li.appendChild(option)
  });

  production_li = document.getElementById("production_list")
  production_list.production_arr.forEach((item, i) => {
    option = document.createElement("option")
    option.innerHTML = item[0] + ', ' + item[1]
    production_li.appendChild(option)
  });

  films_list = document.getElementById("films_list")
  var film_count = +localStorage.getItem("film_id")
  console.log(film_count)
  film1_ls = localStorage.getItem('film1')
  film1_ls = JSON.parse(film1_ls)
  console.log(film1_ls)

  films_arr_ls = []
  for (var i = 1; i <= film_count; i++) {
    let film_current = 'film' + i
    if (localStorage.getItem(film_current)!=null) {
      film = localStorage.getItem(film_current)
      film_ls = JSON.parse(film)
      films_arr_ls.push(film_ls)
    }
  }

  films_arr_ls.forEach((item, i) => {
    option = document.createElement("option")
    films_list.appendChild(option)
    option.innerHTML = item.title
    option.value = item.film_ID
  });


}

// Добавление фильма
function submit_button() {
  let film_title = document.getElementById('film_title').value
  let film_price = document.getElementById('film_price').value
  let film_format = document.getElementById('film_format').value
  let film_amount = document.getElementById('film_amount').value
  let persons_list = document.getElementById('persons_list')
  let genre_list = document.getElementById('genre_list').value
  let production_list = document.getElementById('production_list').value
  console.log(film_title, film_price, film_format, film_amount, genre_list, production_list)
  i = 0
  let p = []
  let p1 = []
  for(option of persons_list.options) {
                if (option.selected) {
                    console.log(option.parentNode.label, option.value)
                    p1.push(option.parentNode.label)
                    p1.push(option.value)
                    p.push(p1)
                    p1 = []
                    i++
                  }
  }
  console.log(p)
  if (localStorage.getItem("film_id")!=null)
    film_id = +localStorage.getItem("film_id")
  film_id++
  newfilm = new Film(film_title, film_id,
  genre_list,
  p,
  production_list,
  film_price, film_amount, film_format)
  // fund.add_film(newfilm)
  // console.log(newfilm)
  // console.log(fund.films_arr.length)
  var jsonObjNewFilm = JSON.stringify(newfilm)
  localStorage.setItem ("film" + film_id, jsonObjNewFilm);
  localStorage.setItem('film_id', film_id)
}

// Удаление фильма
function film_del_button() {
  let films_list = document.getElementById('films_list')
  console.log('ID фильма: ' + films_list.value)
  localStorage.removeItem('film' + films_list.value)
  location.reload()
}

function open_genre() {
  document.querySelector('.add_window').style.display = 'none'
  document.querySelector('.del_window').style.display = 'none'
  document.querySelector('#submit').style.display = 'none'
  document.querySelector('.genre').style.display = 'flex'
}

function open_film() {
  document.querySelector('.add_window').style.display = 'flex'
  document.querySelector('.del_window').style.display = 'flex'
  document.querySelector('#submit').style.display = 'block'
  document.querySelector('.genre').style.display = 'none'
}

// ОТЛАДКА
// Просмотр "Базы данных"
persons.print_persons()
production_list.print_production()
fund.print_film()
client_list.print_clients()
console.log(statistics.stat_films(fund))
console.log(statistics.stat_clients(client_list))
console.log(statistics.stat_income(fund))

// Команды
client1.add_cart(film5, shop_cart1)
client1.add_cart(film2, shop_cart1)
client1.add_fav(film3, favorites1)
client1.add_fav(film1, favorites1)

// Сохранение фильмов в локальное хранилище
var jsonObjFilm1 = JSON.stringify(film1)
localStorage.setItem ("film1", jsonObjFilm1);
var jsonObjFilm2 = JSON.stringify(film2)
localStorage.setItem ("film2", jsonObjFilm2);
var jsonObjFilm3 = JSON.stringify(film3)
localStorage.setItem ("film3", jsonObjFilm3);
var jsonObjFilm4 = JSON.stringify(film4)
localStorage.setItem ("film4", jsonObjFilm4);
var jsonObjFilm5 = JSON.stringify(film5)
localStorage.setItem ("film5", jsonObjFilm5);
