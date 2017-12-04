// linked list test
'use strict';

// path to link js
const LinkedList = require('/linked-list.js')

describe('linked-list.js', () => {
  test('testing single element in list and no next', ()=> {
    let result = new LinkedList(5);
    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
  });

  test('insertion should properly modify the next property', () => {
    let result = new LinkedList(5);
    result.append(new LinkedList(4));
    result.append(new LinkedList(10));

    expect(results.value).toEqual(5);
    expect(result.next.value).toEqual(4);
    expect(result.next.next.value).toEqual(10);
    expect(result.next.next.next).toEqual(null);
  });

  test('remove should update the next property and erase an element', () => {
    let list = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);

    list.append(second); // new LinkedList(20)
    list.append(third); // new LinkedList(30)

    expect(list.value).toEqual(10);
    expect(list.next.value).toEqual(20);
    expect(list.next.next.value).toEqual(30);
    expect(list.next.next.next).toEqual(null);

    list.remove(second);

    expect(list.value).toEqual(10);
    expect(list.next.value).toEqual(30);
    expect(list.next.next).toEqual(null);
  });


});