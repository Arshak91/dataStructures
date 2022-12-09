
class PriorityQueue {
    #list = [];
    #capacity = null;

    constructor(capacity) {
        this.#capacity = Math.max(Number(capacity), 0) || null;
        this.#list = Array(this.#capacity).fill(null);
    }

    get size() {
        return this.#size;
    }

    get isFull() {
        return this.#size === this.#capacity;
    }

    get isEmpty() {
        return this.#size === 0;
    }

    enqueue(item) {
        if (!this.isFull) {
            this.#tail = (this.#tail + 1) % this.#capacity
            this.#list[this.#tail] = item;
            this.#size += 1;

            if (this.#head === -1) {
                this.#head = this.#tail
            }
        }

        return this.size
    }

    dequeue() {
        let item = null;

        if (!this.isEmpty) {
            item = this.#list[this.#head];
            this.#list[this.#head] = null;
            this.#head = (this.#head + 1) % this.#capacity;
            this.#size -= 1;

            if(!this.size) {
                this.#head = -1;
                this.#tail = -1;
            }
        }
        return item
    }

    peek() {
        return this.#list[this.#head];
    }

    print() {
        console.log(this.#list);
    }
}

const cq = new CircularQueue(5);

cq.enqueue(10)
cq.enqueue(20)
cq.enqueue(30)
cq.enqueue(40)

cq.dequeue()
cq.dequeue()
cq.dequeue()

cq.enqueue(50)
cq.enqueue(60)
// cq.enqueue(70)
// cq.enqueue(80)

console.log(cq.peek());

cq.print()