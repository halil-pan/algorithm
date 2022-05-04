/**
 * 用两个栈，实现队列的功能
 */
export class MyQueue {
  length: number;
  stack1: unknown[];
  stack2: unknown[];
  constructor() {
    this.length = 0;
    this.stack1 = [];
    this.stack2 = [];
  }

  push<T>(item: T) {
    if (this.stack1.length === 0) {
      this.swap();
    }

    this.stack1.push(item);
    this.length++;
    return this;
  }

  unshift(): any {
    if (this.stack2.length === 0) {
      this.swap();
    }

    const topTokenInStack = this.stack2.pop();

    if (topTokenInStack) {
      this.length--;
    }

    return topTokenInStack;
  }

  get size() {
    return this.length;
  }

  swap() {
    const stack1Length = this.stack1.length;
    const stack2Length = this.stack2.length;

    // Stack2 => Stack1
    if (stack1Length === 0 && stack2Length !== 0) {
      while (this.stack2.length > 0) {
        this.stack1.push(this.stack2.pop());
      }
    }

    // Stack1 => Stack2
    if (stack2Length === 0 && stack1Length !== 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
  }
}
