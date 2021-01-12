import React, { Component } from "react";

import Modal from "./Modal.js";
import "./gallery.css";


class Car extends Component {
  state = {
     showModal: false,
     dataModal: {
       name: ""
     }
   };

   getModal = data => {
     this.setState({ showModal: true, dataModal: data });
   };

   hideModal = () => {
     this.setState({ showModal: false });
   };

   render() {
     return (
       <div className="container">
         {this.props.data.map((data, key) => (
           <div key={key} className="small">
             <p>{data.id}</p>
             <div className="thisone">
             <button onClick={() => this.getModal(data)}>Gallery</button>
             </div>
           </div>
         ))}

         <Modal
           show={this.state.showModal}
           onHide={this.hideModal}
           name={this.state.dataModal.name}
         />
       </div>
     );
   }
 }

export default Car;
