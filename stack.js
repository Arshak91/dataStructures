
class Stack {
    // #list = new Map();
    #list = [];
    #maxSize = null;

    constructor(maxSize) {
        this.#maxSize = Number(maxSize) || null
    }

    get size() {
        // return this.#list.size
        return this.#list.length
    }

    push(item) {

        if (!this.#maxSize || this.size < this.#maxSize) {
            // this.#list.set(this.size, item)
            this.#list.push(item)
        }
        return this.size
    }

    pop() {
        // if (this.size) {
        //     const lastItem = this.#list.get(this.size - 1);
        //     this.#list.delete(this.size - 1);
        //     return lastItem
        // }
        // return null
        return this.#list.pop(this.size - 1);
    }

    peek() {
        // return this.#list.get(this.size - 1) || null
        return this.#list[this.size - 1] || null
    }

    clear() {
        // this.#list = new Map()
        this.#list = []
    }

    print() {
        console.log(Array.from(this.#list.values()));
    }
}

const myStack = new Stack();

myStack.push("hi");
myStack.push("my");
myStack.push("name");

myStack.print()

// myStack.pop();
// myStack.pop();

console.log(myStack.peek());

myStack.clear()

myStack.print()
