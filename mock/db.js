// mock/db.js
'use strict'
const faker = require('faker');

// 对Date的扩展，将 Date 转化为指定格式的String   
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
// 例子：   
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
Date.prototype.Format = function(fmt) { //author: meizz   
    var o = {
        "M+": this.getMonth() + 1, //月份   
        "d+": this.getDate(), //日   
        "h+": this.getHours(), //小时   
        "m+": this.getMinutes(), //分   
        "s+": this.getSeconds(), //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds() //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

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
        this.date = faker.date.past().Format("yyyy-MM-dd hh:mm:ss");
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
//b console.log(faker.date);
