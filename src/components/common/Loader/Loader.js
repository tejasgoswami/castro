import React, { Component } from "react";

class Loader extends Component {
  render() {
    return <div class="loader-wrap">
      <div class="preloader"><div class="preloader-close">Preloader Close</div></div>
      <div class="layer layer-one"><span class="overlay"></span></div>
      <div class="layer layer-two"><span class="overlay"></span></div>
      <div class="layer layer-three"><span class="overlay"></span></div>
    </div>;
  }
}

export default Loader;
