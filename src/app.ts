import _ from 'lodash'

console.log(_.chunk([1, 2, 3, 4, 5], 2))

const NUM = 45
interface Cat {
    name: string
    sex: string
}

// function touchCat(cat: Cat) {
//     console.log('miao', cat.name);
// }

// touchCat({
//     name: 'tom',
//     sex: 'male',
// });

export function createCat(name: string, sex: string): Cat {
    return { name, sex }
}
