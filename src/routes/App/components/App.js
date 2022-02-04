import React, { useState } from "react";
import { themes, ThemeContext } from "../../../themes/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "../styles/_app.scss";
import "../../../../src/styles/_dark-mode.scss";
import { Link } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //Dark Mode
  // const changeMode = () => {
  //   const body = document.getElementById("body");
  //   let currentBodyClass = body.className;
  //   if (body.className === "app") {
  //     body.className = "dark-mode";
  //   } else if (currentBodyClass === "dark-mode") {
  //     body.className = "app";
  //   }
  // };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleClear = () => {
    setName("");
    setEmail("");
  };

  return (
    <div id="body" className="dark-mode">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Details">Details</Link>
            </li>
          </ul>
        </div>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <button
              id="changeMode"
              className="app__dark-mode-btn icon level-right"
              //onClick={changeMode}
              onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.lightMode : themes.darkMode);
              }}
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>
          )}
        </ThemeContext.Consumer>
      </div>

      <div className="columns">
        <div className="column">
          <p>
            Lollipop powder powder. Cotton candy caramels chupa chups halvah
            muffin caramels apple pie topping cake. Topping chocolate bar pastry
            chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar
            plum. Chocolate bar lollipop candy canes. Biscuit croissant apple
            pie pudding caramels wafer tart tootsie roll macaroon. Croissant
            tiramisu chocolate bar carrot cake lemon drops halvah.
          </p>
        </div>
        <div className="column">
          <p>
            Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
            tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops
            marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart.
            Pudding sugar plum chocolate cake cake biscuit pastry pastry
            chocolate bar tart. Lemon drops dessert gummies icing.
          </p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary">Save</a>
          <a className="button is-link" onClick={handleClear}>
            Clear
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
