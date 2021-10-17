const Uselocalstroage = () => {
  const getlocal = () => {
    const localstroage = localStorage.getItem("cart");
    return localstroage ? JSON.parse(localstroage) : {};
  };

  const setlocalstroage = (name) => {
    const stor = getlocal();
    // console.log(stor);
    if (stor[name]) {
      let newQQQ = stor[name] + 1;
      stor[name] = newQQQ;
      //   console.log(stor[name]);
    } else {
      //   console.log(stor[name]);
      stor[name] = 1;
    }
    setlocal(stor);
  };

  const localstroagePLUS = (name) => {
    const plus_stor = getlocal();
    plus_stor[name] = plus_stor[name] + 1;
    setlocal(plus_stor);
  };

  const localstroageMINUS = (name) => {
    const minus_stor = getlocal();
    minus_stor[name] = minus_stor[name] - 1;
    setlocal(minus_stor);
  };

  const setlocal = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return {
    setlocalstroage,
    localstroagePLUS,
    localstroageMINUS,
  };
};

export default Uselocalstroage;
