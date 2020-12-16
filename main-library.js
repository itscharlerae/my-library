


// movie class

// show class

// hobby class


// user class
class User {
    constructor(name) {
        this.name = name;
    }

    // accessor method
    getName() {
        return this.name;
    }

    // mutator method
    changeName(newName) {
        this.name = newName;
    }
}

const charle = new User('charle');