 

const fetch = require('node-fetch')

const getPuzzle = (wordCount) =>{
    fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then(res => res.json())
    .then(data => data.puzzle).catch((error)=>{
        console.log(error)
    })
}


// const getPuzzle = () => {
    
//     fetch.then((data)=>{
//         return data.json
//     }).then((res)=>{
//     console.log(res)
//     }).catch((error)=>{
//         console.log(error)
//     })
   
//     // const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
//     // if (response.status === 200) {
//     //     const data = await response.json()
//     //     return data.puzzle
//     // } else {
//     //     throw new Error('Unable to get puzzle')
//     // }
// }

// getPuzzle(2)
