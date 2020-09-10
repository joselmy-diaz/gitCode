import React from "react";

class Ventana extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ventana">
        <div className="com">
          <span>app.js</span>
        </div>
      </div>
    );
  }
}

export default Ventana;
