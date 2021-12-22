# Revisiting Objects

## Required Tasks

- Write an object with field name.

```javascript
  const obj = {
    name: [], // ['name', length][]
    set name,
    get name,
  }

  console.log(obj.name)

  obj.name = 'Hovhannes, Sona';

  console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]
```
[See the solution](https://github.com/GevKerobyan/Getter_Setter_Property_Descriptor/blob/master/classWork12_01.js)

---

- The input is object, which `keys` are student's names and `values` are `array` of their scores. Find the student with the best average score.

```javascript
getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80],
});
// OUTPUT => "John"

// John's avg = 90
// Bob's avg = 83.33
```
[See the solution](https://github.com/GevKerobyan/Getter_Setter_Property_Descriptor/blob/master/classWork12_02.js)

---