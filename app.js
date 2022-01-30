// npm - global command, comes with node
// npm --version

// local dependancy - use it only in a particular project
// npm i <packageNamae>

// global dependancy - use it in any project
// npm install -g <packageName>


// package.json - manifest file (stores important info about project/package)



const _=require(`lodash`)

const items = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)