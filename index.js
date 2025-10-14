//promise:it is use for callback hell(function call in more call function call) and for in feature you donot know what will happened(resove,reject)
let resolve = prompt("Search for order");
let p = new Promise(function (resolve, reject) {
    console.log("order on progress");
    confirm(" sucessfully your order is conformed");
    setInterval(() => {
        resolve('congratulations you are own upto 300 cashback ');

        console.log("your order is on the way near 3km range ");

    }, 2000)
    confirm("your order is confirmed");


})
// reject and resolve: only one be done, either reject or resolve not at a time two
let p2 = new Promise(function (resolve, reject) {
    console.log("your order is cancelled");
    setTimeout(() => {
        alert("sorry sir your order is not delivery in your location!");
        reject("Due to technical problem ");
    }, 3000)

    console.log("sorry for your expection😒");
})
//Handler
p.then(function (value) {
    console.log("Special offer get one and buy '$(one)'");

})
p2.catch(function (error) {
    console.log("sorry sir your order has been cancelled ");
})