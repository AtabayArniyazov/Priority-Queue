const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if(this.heap.size() !== this.maxSize) {
			this.heap.push(data, priority);
		} else {
			throw new Error("Queue has max size!");
		}
	}

	shift() {
		this.heap.pop();

	}

	size() {
		var currentSize = this.length;
		return currentSize;
	}

	isEmpty() {
		if(this.isEmpty === true) {
			return true;
		} else {
			false;
		}
	}
}

module.exports = PriorityQueue;
