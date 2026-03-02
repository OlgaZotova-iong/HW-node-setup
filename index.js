const func = () => {
  const sum = (a, b) => a + b;
  let x = 10;
  let y = 20;
  const oldVar = 50;

  console.log(sum(x, y)); // 30
  debugger;
  x = 20;
  y = 30;

  const z = 100;

  if (x == y) {
    console.log('equal');
  }

  console.log(sum(x, y)); // 50
};

func();
