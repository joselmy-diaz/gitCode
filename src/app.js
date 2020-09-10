import React from "react";
import Buscador from "./buscador";
import Ventana from "./ventana";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { busqueda: "" };
  }

  render() {
    return (
      <div>
        <Buscador />
        <Ventana />
      </div>
    );
  }
}

export default App;
