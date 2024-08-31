import { useState } from "react";
import scss from "./scss/App.module.scss";
import Cards from "./components/Cards";

function App() {
  const [press, setPress] = useState("press to get key code");
  const [pressing, setPressing] = useState([]);

  const handleKeyArray = (e) => {
    setPress(e.key);

    setPressing([
      {
        title: "event.key",
        key: e.key,
      },
      {
        title: "event.location",
        key: e.location,
      },
      {
        title: "event.code",
        key: e.code,
      },
      {
        title: "event.which",
        key: e.which,
      },
    ]);
  };

  return (
    <div className={scss.App}>
      <h2 className={scss.keyCode}>Key Code JavaScript: {press}</h2>

      <input
        className={scss.key}
        type="text"
        onKeyDown={handleKeyArray}
        value={press}
      />

      <div className={scss.cards}>
        {pressing.map((click, id) => {
          return <Cards click={click} key={id} />;
        })}
      </div>
    </div>
  );
}

export default App;
