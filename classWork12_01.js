"use strict";

const obj = {
    _name: [],
    set name(nameStr) {

        const nameArr = nameStr.split(', ');
        for (let i in nameArr) {
            this._name.push(nameArr[i], nameArr[i].length)
        }
    },

    get name() {

        let output = ``;
        for (let i in this._name) {
            output = output + this._name[i][0];
        }
        return this._name;
    },
}

obj.name = 'Hovhannes, Sona, Gevorg';

console.log(obj.name) 