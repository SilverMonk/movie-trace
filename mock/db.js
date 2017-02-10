// mock/db.js
'use strict'
const faker = require('faker')

module.exports = function() {
    let data = {
        'director': [{
            id: '0',
            title: faker.lorem.words(),
            img: faker.image.image()
        },{
            id: '1',
            title: faker.lorem.words(),
            img: faker.image.image()
        },{
            id: '2',
            title: faker.lorem.words(),
            img: faker.image.image()
        }],
        'test': {
            "par1": [1, 2]
        }
    }
    return data
}
