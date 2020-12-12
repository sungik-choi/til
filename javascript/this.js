const someone = {
  name: "ed",
  whoAmI() {
    console.log(this);
  },
};

someone.whoAmI();
// {name: "ed", whoAmI: ƒ}
// name: "ed"
// whoAmI: ƒ whoAmI()
// __proto__: Object

const myWhoAmI = someone.whoAmI;
myWhoAmI();
// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

const bindedWhoAmI = myWhoAmI.bind(someone);
bindedWhoAmI();
// {name: "ed", whoAmI: ƒ}
// name: "ed"
// whoAmI: ƒ whoAmI()
// __proto__: Object

document.querySelector(".controller").addEventListener("touchend", evt => {
  const dog = document.querySelector(".gage button");
  const offset = 40;
  const interval = 300;
  const moveLeft = () => {
    const currentLeft = parseInt(dog.style.left);
    dog.style.left = `${currentLeft + offset}px`;
    setTimeout(moveLeft, interval);
  };
  moveLeft();
});
