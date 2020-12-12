// ES6 Class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  run() {
    console.log(`${this.name} 녀석이 열심히 달린다`);
  }

  setName(name) {
    this.name = name;
    return this;
  }

  info() {
    console.log(`name is ${this.name}, age is ${this.age}`);
  }
}

new Animal("호랑이", 22).setName("염소").run();

// prototype
function Animal2(name, age) {
  this.name = name;
  this.age = age;
}

Animal2.prototype.run = function run() {
  console.log(`${this.name} 녀석이 열심히 달린다`);
};

Animal2.prototype.setName = function setName(name) {
  this.name = name;
  return this;
};

Animal2.prototype.info = function info() {
  console.log(`name is ${this.name}, age is ${this.age}`);
};

new Animal2("호랑이, 22").setName("염소").run();
