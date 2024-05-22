'use strict'
// const { pipeline } = require('stream')
// const { join } = require('path')
// const { createReadStream, createWriteStream } = require('fs')

// pipeline(
//   createReadStream(__filename),
//   createWriteStream(join(__dirname, 'out.txt')),
//   (err) => {
//     if(err){
//       console.error(err)
//       return
//     }
//     console.log('finished writing')
//   }
// )

// const {pipeline} = require('stream')
// const {join} = require('path')
// const { createReadStream, createWriteStream} = require('fs')
// const {Transform} = require('stream')

// const createUppercaseStream = () => {
//   return new Transform({
//     transform(chunk,enc,next){
//       const uppercased = chunk.toString().toUpperCase()
//       next(null, uppercased)
//     }
//   })
// }

// pipeline(
//     createReadStream(__filename),
//     createUppercaseStream(),
//     createWriteStream(join(__dirname, 'out.txt')),
//     (err) => {
//       if(err){
//         console.error(err)
//         return
//       }
//       console.log('finished writing')
//     }
//   )

// reading directories

const { readdirSync, readdir } = require('fs')
const { readdir: readdirProm } = require('fs/promises')

try {
  console.log('sync', readdirSync(__dirname))
} catch (err) {
  console.error(err)
}

readdir(__dirname, (err, files) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('callback', files)
})

async function run() {
  const files = await readdirProm(__dirname)
  console.log('promise', files)
}

run().catch((err) => {
  console.error(err)
})