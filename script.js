// const videoData = [];

// let a = 5;
// console.log(a);     // 5
// console.log(a++);   // 6

// a += 1;
// a = a + 1;
// a++; // инкремент
// a--; // декремент


// //       0  1  2  3  4   5   длина массива 6
// let b = [1, 2, 3, 4, 8, 19];

// let index = 4
// console.log(b[index]); // 1
// console.log(b[5]); // 19


// for (let index = 0; index < b.length; index++) {
//     console.log(b[index]);
// }

// // for-in 
// for (let element in b) {
//     console.log(element);
// }

// // object
// let videoItem = {
//     title: "Title1",
//     description: "Description1",
//     url: "url",

//     // новый обьект //
//     user: {
//         name: "Username",
//         subscribers: 1000,
//     },
// }

// console.log(videoItem);
// console.log(videoItem.title);
// console.log(videoItem["title"]);
// console.log(videoItem.user.name);


let sostav = [
    {
        number: 0,
        weight: 100,
        tovar: {
            name: "kartoshka",
            weight: 500,
        },
    },

    {
        number: 1,
        weight: 100,
        tovar: {
            name: "ogurtsi",
            weight: 200,
        },
    },

    {
        number: 2,
        weight: 100,
        tovar: {
            name: "yabloki",
            weight: 100,
        },
    },
];

// let weightWagon1 = sostav[0].weight;


sostav.forEach(function (item) {
    console.log(item);
})
