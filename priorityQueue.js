
class PriorityQueue {
    #list = [];
    #capacity = null;

    constructor(capacity) {
        this.#capacity = Math.max(Number(capacity), 0) || null;
    }

    get size() {
        return this.#list.length;
    }

    get isEmpty() {
        return this.size === 0;
    }

    get isFull() {
        return this.#capacity !== null && this.size === this.#capacity;
    }

    enqueue(item, priority = 0) {
        priority = Math.max(Number(priority), 0)
        const element = {item, priority};

        if (this.isEmpty || element.priority >= this.#list[this.size - 1].priority ) {
            this.#list.push(element)
        } else {
            for (const index in this.#list) {
                if (element.priority < this.#list[index].priority) {
                    this.#list.splice(index, 0, element);
                    break;
                }
            }
        }

        return this.size;
    }

    dequeue() {
        const element = this.#list.shift();
        return element ? element.item : null;
    }

    peek() {
        const element =  this.#list[0];
        return element ? element.item : null;
    }

    print() {
        console.log(this.#list.map(el => el.item));
    }
}

const pq = new PriorityQueue();


pq.enqueue(12)
pq.enqueue(24, 3)
pq.enqueue(20, 2)
pq.enqueue(45, 3)
pq.enqueue(16, 1)

pq.dequeue()

console.log(pq.dequeue());

pq.print();

// console.log(pq.isEmpty());
// console.log(pq.isFull());

console.log(pq.print());