
class Queue {
    #list = [];
    #capacity;

    constructor(capacity) {
        this.#capacity = Math.max(Number(capacity), 0) || null;
    }

    get size() {
        return this.#list.length;
    }

    get isFull() {
        return this.#capacity !== null && this.size === this.#capacity;
    }

    get isEmpty() {
        return this.size === 0;
    }

    enqueue(item) {
        if (this.#capacity === null || this.size < this.#capacity) {
            return this.#list.push(item)
        }
        return this.size
    }

    dequeue() {
        return this.#list.shift()
    }

    peek() {
        return this.#list[0];
    }

    print() {
        console.log(this.#list);
    }
}

const qu = new Queue();

qu.enqueue(12);
qu.enqueue(6);
qu.enqueue(24);
qu.enqueue(50);

// qu.dequeue()

qu.print();


qu.dequeue()

qu.print()
// console.log(qu.dequeue());
