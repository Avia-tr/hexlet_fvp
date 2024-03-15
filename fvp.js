console.log('1. Task');

const names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];
names.forEach((element) => {
  console.log(`Привет, ${element}`);
});

console.log('2. Task');

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((element) => {
  return element * 10;
});
console.log(newNumbers);

console.log('3. Task');

const numbers2 = [5, 12, 8, 130, 44];
const newNumbers2 = numbers2.filter((element) => {
  return element > 10;
});
console.log(newNumbers2);

console.log('4. Task');

const people = [{ name: 'Иван', age: 23 }, { name: 'Мария', age: 18 }, { name: 'Алексей', age: 32 }, { name: 'Ольга', age: 24 }, { name: 'Сергей', age: 17 }, { name: 'Анна', age: 21 }];
const newPeople = people.filter((element) => {
  return element.age > 18;
}).map((element) => {
  return `${element.name} (${element.age} лет)`;
});
console.log(newPeople);

console.log('5. Task');

const products = [{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}];
const totalPrice = products.reduce((sum, element) => {
  return sum + element.price * element.quantity;
}, 0);
console.log(totalPrice);
