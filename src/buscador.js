import React from "react";

class Buscador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { busqueda: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(elmen) {
    var valie = elmen.target.value;
    this.setState({ busqueda: valie });
  }

  render() {
    return (
      <div className="bus">
        <input
          value={this.state.busqueda}
          onChange={this.handleInputChange}
          className="buscador"
        />
      </div>
    );
  }
}

export default Buscador;
