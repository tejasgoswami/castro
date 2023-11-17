import React, { Component } from "react";

class Loader extends Component {
  render() {
    return <div className="loader-wrap">
      <div className="preloader"><div className="preloader-close">Preloader Close</div></div>
      <div className="layer layer-one"><span className="overlay"></span></div>
      <div className="layer layer-two"><span className="overlay"></span></div>
      <div className="layer layer-three"><span className="overlay"></span></div>
    </div>;
  }
}

export default Loader;
