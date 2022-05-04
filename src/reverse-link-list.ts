/**
 * 输入一个单向链表的头节点，反转该链表，并输出反转之后的头节点
 */

interface LinkNode {
  value: unknown;
  next?: LinkNode;
}

export const createLinkList = (nodeList: unknown[]): LinkNode => {
  let currentNode: LinkNode = {
    value: nodeList[nodeList.length - 1],
  };
  for (let i = nodeList.length - 2; i >= 0; i--) {
    currentNode = {
      value: nodeList[i],
      next: currentNode,
    };
  }

  return currentNode;
};

export const reverseLinkList = (linkNode: LinkNode): LinkNode | null => {
  let previousNode: LinkNode | null = null;
  let currentNode: LinkNode | null = null;
  let nextNode: LinkNode | null = linkNode;

  while (nextNode) {
    if (!previousNode && currentNode && currentNode.next) {
      delete currentNode.next;
    }

    if (previousNode && currentNode) {
      currentNode.next = previousNode;
    }

    previousNode = currentNode;
    currentNode = nextNode;
    nextNode = nextNode.next ?? null;
  }

  if (currentNode && previousNode) {
    currentNode.next = previousNode;
  }

  return currentNode;
};
