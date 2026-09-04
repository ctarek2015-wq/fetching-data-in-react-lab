import { useState, useEffect } from "react";
import "./App.css";
import * as fetchTypicode from "./services/fetchTypicode";
import Button from "./components/Button";
import List from "./components/List";

function App() {
  const [dataCode, setDataCode] = useState([]);
  const fetchData = async ({ target }) => {
    const data = await fetchTypicode.index(target.name);
    setDataCode(data);
  };
  console.log(dataCode);

  return (
    <>
      <h1>Hello world!</h1>
      <Button fetchData={fetchData} name="posts" />
      <br />
      <Button fetchData={fetchData} name="comments" />
      <br />
      <Button fetchData={fetchData} name="todos" />
      <br />
      <Button fetchData={fetchData} name="users" />
      <br />
      {/* <List data={dataCode} /> */}
    </>
  );
}

export default App;
