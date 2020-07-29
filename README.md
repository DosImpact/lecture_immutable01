```js
import { Record, List } from "immutable";

const course = Record({
  name: null,
  task: false,
});

const Person = Record({
  name: "doyoung",
  age: 24,
  courses: List(),
});

let person = Person({
  name: "robot",
  age: 123124,
  courses: List([
    new course({ name: "cs", task: false }),
    new course({ name: "JAVA", task: true }),
  ]),
});

console.log(person);
console.log(person.toJS());

console.log(person.name, person.age, person.courses.toJS());
let nperson = person.setIn(["courses", 1, "title"], "C++"); // Error Cannot set unknown key "title" on Record
console.log(nperson.toJS());
```
