
  /*Задача:
1. С массива sports с помощью метода .slice() скопировать в новый массив summer_sports массивы, которые относятся к летним видам спорта.
2. С массива sports с помощью метода .slice() скопировать в новый массив winter_sports массивы, которые относятся к зимним видам спорта.
3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы, которые относятся к фруктам.
4. Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль в виде, который изображен на рисунке console.png..*/

 sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],

    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];
winterSports = [];
  winterSports = sports.slice(0,5);
  console.log(winterSports);
summerSports = [];
  summerSports = sports.slice(5,11);
  console.log(summerSports);
fruit = [];
  fruit = fruit.concat(winterSports.splice(2,1));
  fruit = fruit.concat(summerSports.splice(2,2));
  console.log(fruit);
for (i = 0; i < winterSports.length; i++) {
     if (winterSports[i][0] === 'skier') {
        console.log("*** Winter Sports ***");
     }
     console.log(winterSports[i].join(":"));
     }
for (i = 0; i < summerSports.length; i++) {
     if (summerSports[i][0] === 'swimmer') {
        console.log("*** Summer Sports ***");
     }
     console.log(summerSports[i].join(":"));
     }   
 for (i = 0; i < fruit.length; i++) {
     if (fruit[i][0] === 'apple') {
        console.log("*** Fruit ***");
     }
     console.log(fruit[i].join(":"));
     }     