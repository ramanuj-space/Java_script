// Dates

let myDate  = new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// let mycreatedDate = new Date (2023, 0 , 23)
// let mycreatedDate = new Date (2023, 0 , 23, 5, 3)
 let mycreatedDate = new Date ("01-14-2023")
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
// `${newDate.getDay()} and the time`
newDate.toLocaleString('default',{
    weekday:"long"
})
