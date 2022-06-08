class Group {
    constructor() {
        this.group = []
    }

    add(value) {
        if (!this.group.includes(value)) {
            this.group.push(value)
        }
    }

    delete(value) {
        if (this.group.includes(value)) {
            this.group.splice(this.group.indexOf(value), 1)
        }
    }

    has(value) {
        return this.group.includes(value)
    }

    static from(obj) {
        let newGroup = new Group()
        for (let item of obj) {
            newGroup.add(item)
        }
        return newGroup
    }
}



let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false