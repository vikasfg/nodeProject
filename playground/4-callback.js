// setTimeout( ()=>{
//   console.log('hi')
// },2000 )

// const names = ['vikas','vinay','rajan']

// const shortname = names.filter((name)=>
//       {
//           return 2
//       }
// )

// const geoCode = (address,calback) =>{
//   setTimeout(()=>{
//     const data = {
//         latitude: 0,
//         longitude: 0
//     }
//     calback(data)
//   },2000)
// }

// datas = geoCode('delhi',(data)=>{
//      console.log(data)
// })


const add = (a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },1000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})