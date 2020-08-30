const age = [12, 13, 14, 15];
const age2 = [16, 17, 18];
const AllAge = age.concat(age2);
console.log(AllAge);

const AllAge2 = [...age, ...age2, 5, ...AllAge];//spread all element;
console.log(AllAge2);

const maximum = Math.max(...AllAge2);//spread all elements
console.log(maximum);