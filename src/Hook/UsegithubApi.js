const { useEffect } = require("react");
const { useState } = require("react");

const Usegithubapi = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/sagorhasanmehedi/jsonapi/gh-pages/mealsdetails.json"
    )
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  return data;
};

export default Usegithubapi;
