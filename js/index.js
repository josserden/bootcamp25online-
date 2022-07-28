import { clients } from './clients.js';

/*
 * Написати клас Клієнти по роботі з масивом клієнтів.
 * Для ініціалізації клас повинен отримати параметри об'єкта з масивом клієнтів (клієнтів) і посилання на список із DOM (listRef).
 *
 * У класі повинні бути реалізовані методи:
 * 1. normalizeData() - готує і повертає масив клієнтів для рендера:
 * - з поля fullName або username створити загальне - ім'я, в якому має бути або прізвище клієнта (якщо є) або його ник
 * - країни повинні бути у верхньому реєстрі
 *
 * 2. createMarkup(preparedData) - отримує підготовлений для рендеринга масив, створює і повертає розмітку за шаблоном з index.html:
 * - якщо пошти немає, виведіть рядок "Немає електронної пошти"
 * - лишка повинна бути прикрашена тільки якщо в полі shouldColor значення true
 *
 * 3. render() - за допомогою методу normalizeData() готує дані, за допомогою методу createMarkup(preparedData) створює розмітку і додає її в список на сторінці.
 *
 * 4. handleClick(e) - обробіток події 'Click' за списком (делегування):
 * - якщо натиснути кнопку по кнопці видалити, клієнт видаляється з масиву і переробляє весь список
 * - якщо клік був по кнопці color, окрашивает всю лишку в потрібний колір, а в масиві змінює значення поля shouldColor цього клієнта на true
 *
 * Після цього отримайте посилання на список і створіть екземпляр класу (myClients).
 * Зарендерити масив на сторінку.
 * У список повісити слухача події з обробником handleClick.
 */

// Example for initialization

// const listRef = document.querySelector('.clients');

// const myClients = new Clients({ clients, listRef });
// myClients.render();
