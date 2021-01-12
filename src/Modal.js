import React, { Component } from "react";

import "./modal.css";

class Modal extends Component {
  render() {
    console.log(this.props.show);
    return (
      <React.Fragment>
        {this.props.show && (
          <div className="modal">
           <p>{this.props.name}</p>
            <button onClick={this.props.onHide}>Close Modal</button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
