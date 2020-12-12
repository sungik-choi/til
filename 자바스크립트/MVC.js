const PenguinModel = function PenguinModel(XMLHttpRequest) {
  this.XMLHttpRequest = XMLHttpRequest;
};

PenguinModel.prototype.getPenguin = function getPenguin(index, fn) {
  const oReq = new this.XMLHttpRequest();

  oReq.onload = function onLoad(e) {
    const ajaxResponse = JSON.parse(e.currentTarget.responseText);
    const penguin = ajaxResponse[index];

    penguin.index = index;
    penguin.count = ajaxResponse.length;

    fn(penguin);
  };

  oReq.open("GET", "https://codepen.io/beautifulcoder/pen/vmOOLr.js", true);
  oReq.send();
};

const PenguinView = function PenguinView(element) {
  this.element = element;

  this.onClickGetPenguin = null;
};

PenguinView.prototype.render = function render(viewModel) {
  this.element.innerHTML =
    `<h3>${viewModel.name}</h3>` +
    `<img class="penguin-image" src="${viewModel.imageUrl}" alt="${viewModel.name}" />` +
    `<p><b>Size:</b> ${viewModel.size}</p>` +
    `<p><b>Favorite food:</b> ${viewModel.favoriteFood}</p>` +
    `<a id="previousPenguin" class="previous button" href="javascript:void(0);"` +
    ` data-penguin-index="${viewModel.previousIndex}">Previous</a> ` +
    `<a id="nextPenguin" class="next button" href="javascript:void(0);"` +
    ` data-penguin-index="${viewModel.nextIndex}">Next</a>`;

  this.previousIndex = viewModel.previousIndex;
  this.nextIndex = viewModel.nextIndex;

  const previousPenguin = this.element.querySelector("#previousPenguin");
  previousPenguin.addEventListener("click", this.onClickGetPenguin);

  const nextPenguin = this.element.querySelector("#nextPenguin");
  nextPenguin.addEventListener("click", this.onClickGetPenguin);
};

const PenguinController = function PenguinController(penguinView, penguinModel) {
  this.penguinView = penguinView;
  this.penguinModel = penguinModel;
};

PenguinController.prototype.initialize = function initialize() {
  this.penguinView.onClickGetPenguin = this.onClickGetPenguin.bind(this);
};

PenguinController.prototype.onClickGetPenguin = function onClickGetPenguin(e) {
  const target = e.currentTarget;
  const index = parseInt(target.dataset.penguinIndex, 10);

  this.penguinModel.getPenguin(index, this.showPenguin.bind(this));
};

PenguinController.prototype.showPenguin = function showPenguin(penguinModelData) {
  const penguinViewModel = {
    name: penguinModelData.name,
    imageUrl: penguinModelData.imageUrl,
    size: penguinModelData.size,
    favoriteFood: penguinModelData.favoriteFood,
  };

  penguinViewModel.previousIndex = penguinModelData.index - 1;
  penguinViewModel.nextIndex = penguinModelData.index + 1;

  if (penguinModelData.index === 0) {
    penguinViewModel.previousIndex = penguinModelData.count - 1;
  }

  if (penguinModelData.index === penguinModelData.count - 1) {
    penguinViewModel.nextIndex = 0;
  }
  this.penguinView.render(penguinViewModel);
};

const penguinModel = new PenguinModel(XMLHttpRequest);

const targetElement = document.getElementById("listOfPenguins");
const penguinView = new PenguinView(targetElement);

const controller = new PenguinController(penguinView, penguinModel);

controller.initialize();

controller.onClickGetPenguin({ currentTarget: { dataset: { penguinIndex: 0 } } });
