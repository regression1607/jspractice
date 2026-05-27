# Time Complexity

Time Complexity measures how fast an algorithm runs as input size increases.

It tells us:

* How many operations are performed
* How execution time grows

Example:

```js
for(let i = 0; i < n; i++) {
    console.log(i);
}
```

Loop runs `n` times.

Time Complexity:

O(n)

---

# Space Complexity

Space Complexity measures how much extra memory an algorithm uses.

It includes:

* Variables
* Arrays
* Objects
* Function call stack

Example:

```js
function copy(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    return newArr;
}
```

New array stores `n` elements.

Space Complexity:

O(n)

---

# Common Time Complexities

| Complexity | Meaning              |
| ---------- | -------------------- |
| O(1)       | Constant             |
| O(log n)   | Very Fast            |
| O(n)       | Linear               |
| O(n²)      | Slow for large input |

---

# Easy Difference

| Time Complexity      | Space Complexity   |
| -------------------- | ------------------ |
| Measures speed       | Measures memory    |
| Number of operations | Extra storage used |

---

# Simple Example

```js
function sum(arr) {
    let total = 0;

    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}
```

Time Complexity:

O(n)

Space Complexity:

O(1)
