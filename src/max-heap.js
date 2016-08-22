const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		var detached;
		detached = this.detachRoot();
		this.restoreRootFromLastInsertedNode(detached);
	}

	detachRoot() {
		this.root = null;
		
	}

	restoreRootFromLastInsertedNode(detached) {
		// var root = this.root;
		// var left = this.root.left;
		// var lastInsertedNode = this.root.right;
		// var detached = this.detachRoot();
		// this.restoreRootFromLastInsertedNode(detached);
	}

	size() {
		if(this.heap === null) {
			this.isEmpty = true
		}

	}

	isEmpty() {
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if(!this.root) {
			this.root = node;
		} else if(!this.root.left){
			this.root.left = node;
		} else if(!this.root.right){
			this.root.right = node;
		} else if(!this.root.left.left){
			this.root.left.left = node;
		} else if(!this.root.left.right){
			this.root.left.right = node;
		}

		// if(this.parentNodes.length === 2) {
		// 	this.parentNodes.pop();
		// } 

		// if(this.parentNodes.length === 3) {
		// 	this.parentNodes.pop();
		// }

		// if(this.parentNodes.length === 4) {
		// 	this.parentNodes.pop();
		// }
			
		// this.parentNodes.push(node);
		
	}

	shiftNodeUp(node) {
		// var correctParentNodesOrderAfterShiftUp = [
		// 	this.root.left.left,
		// 	this.root.right,
		// 	h.root
		// ]
		// this.shiftNodeDown(this.root);
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
