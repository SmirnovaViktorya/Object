/******************презентация TASK 1*****************/

let user = {
    phoneNumber: "12345678",
    email: "abcd@gmail.com",

    getName(str) {
        this.name = str;
        console.log(this.name);
    },

    changeNumber() {
        let newNumber = prompt("Введи новый номер телефона");
        this.phoneNumber = newNumber;
    },

    changeEmail() {
        let newEmail = prompt("Введи новый email");
        this.email = newEmail;
    }
}

// user.getName(prompt("Введи имя"));
// user.changeNumber();
// user.changeEmail();
// console.log(user);

// /******************презентация TASK 2*****************/

let tree = {
    name: "maple",
    height: 200,
    // leaves: createLeaves(),
    family: "sap",

    createLeaves() {
        this.leaves = this.height * 50;
    },

    shortenTree() {
        let del = prompt("На сколько укоротить дерево?");
        if (this.height > del) {
            this.height -= del;
            this.createLeaves();
        } else console.log("Дерево слишком низкое");
    }
};

// tree.createLeaves();
// console.log(`Высота: ${tree.height}, кол-во листьев: ${tree.leaves}`);
// tree.shortenTree();
// console.log(`Высота: ${tree.height}, кол-во листьев: ${tree.leaves}`);

// /******************ДЗ TASK 1*****************/

let obj = {
    a: "b",
    c: "d",
};

function convertObject(obj) {
    for (let key in obj) {
        let nameKey = key;
        key = obj[key];
        obj[key] = nameKey;
        delete obj[nameKey];
    }
};

// console.log(obj);
// convertObject(obj);
// console.log(obj);

// /******************ДЗ TASK 2*****************/

let objT = {
    x: 1,
    y: 2,
};

let objF = {
    x: 1,
    y: 3,
};

function isEvenValue(obj) {
    for (let key in obj) {
        if (obj[key] % 2 == 0) {
            return true;
        }
    }
    return false;
};

// console.log(isEvenValue(objT));
// console.log(isEvenValue(objF));
