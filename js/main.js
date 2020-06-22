'use strict';

{

const d = new Date(2019, 9);
// console.log(d);
d.setHours(10, 20, 30);
d.setHours(d.getHours()+ 2, 5, 6);
console.log(d);

}