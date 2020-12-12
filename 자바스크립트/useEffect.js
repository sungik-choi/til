const Plain = (() => {
  // let _render;
  let _currentComponent;
  let _effectFns = [];
  let _currentHookIndex = 0;
  const _values = [];

  return {
    renderComponent(Component) {
      const comp = Component();
      comp.render();

      // execute effect
      _effectFns.forEach(fn => fn());

      _currentHookIndex = 0;
      _currentComponent = Component;
      _effectFns = [];

      return comp;
    },

    useState(_initVal) {
      _values[_currentHookIndex] = _values[_currentHookIndex] || _initVal;

      const localHookOrder = _currentHookIndex;
      function setMethod(updateFn) {
        _values[localHookOrder] = updateFn(_values[localHookOrder]);

        // re-render
        Plain.renderComponent(_currentComponent);
      }

      return [_values[_currentHookIndex++], setMethod];
    },

    useEffect(cb) {
      _effectFns.push(cb);
      // cb();
    },
  };
})();

function QNA() {
  const [foo, setFoo] = Plain.useState(``);

  const clickHandler = () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(users => users.results[0].email)
      .then(
        email => {
          console.log('will change state..');
          setFoo(value => `hello ${email} !`);
        },
        err => {
          console.log(`err....${err}`);
        },
      );
  };

  Plain.useEffect(() => {
    console.log(`[effect]`);
    console.log(`-----------------------`);
  });

  return {
    render() {
      console.log(`[render] : ${foo}`);
    },
    initComponent() {
      document.querySelector('.bomb').addEventListener('click', clickHandler);
    },
  };
}

const pl = Plain.renderComponent(QNA);
pl.initComponent();
