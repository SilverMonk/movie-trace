// mock/db.js
'use strict'
const faker = require('faker');

module.exports = function() {
    let data = {
        'director': {
            data: [
                new Director(0),
                new Director(1),
                new Director(2),
                new Director(3),
                new Director(4),
            ],
            count: 103,
            timestamp: new Date().getTime(),
        },
        'film': {
            data: [
                new Film(0),
                new Film(1),
                new Film(2),
                new Film(3),
                new Film(4),
            ],
            count: 103,
            timestamp: new Date().getTime(),
        },
    }
    return data
}
class Director {
    constructor(id) {
        this.id = id;
        this.namecn = faker.name.findName();
        this.nameen = faker.name.findName();
        this.sex = 0;
        this.imbdbno = null;
        this.birthAddr = faker.address.city();
        this.introduction = faker.lorem.paragraph();
        this.avatarSmall = faker.image.avatar();
        this.workTag = faker.lorem.words();
        this.birthDate = faker.date.past();
    }
}
class Film {
    constructor(id) {
        this.id = id;
        this.namecn = faker.name.findName();
        this.nameen = faker.name.findName();
        this.typecn = faker.lorem.word();
        this.adrrcn = faker.lorem.word();
        this.imbdbno = null;
        this.introduction = faker.lorem.paragraph();
        this.avaurlSmall = faker.image.image();
        this.languagecn = faker.lorem.word();
    }
}
// console.log(faker.image)
