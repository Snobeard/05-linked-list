# 05: Linked List
Description: **Lab 05 of Code Fellows JavaScript 401d19** </br>
Author: **Matthew LeBlanc** </br>
Date: **12/03/17**

### Class LinkedList
had three methods connected to them, which each took an arity of one that was a new linkedlist class node.
1. append(node) - took the node and appended it to the last node in the list
2. remove(node) - took the node and removed it from the list, resetting it's `next` value to that of the succeeding node
3. find(node, num) - initially took just the node, and on callback incremented the number to tell how many nodes were looked through to find either the given value, or the node object that was set as the argument of `find()`