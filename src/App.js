import React from 'react';
import { render } from "react-dom";
import $ from 'jquery';
import './styles.css';

class App extends React.Component {
constructor(){
    super()
      this.state = {
             data: [{"id":1,"carManu":"Mercedes","carModel":"A160 AMG Line","clutch":"Manual","horsePower":110,"cc":1332,"price":31564,"rating":95},{"id":2,"carManu":"Volkswagen","carModel":"Polo R-Line","clutch":"Manual","horsePower":110,"cc":999,"price":22458,"rating":93},{"id":3,"carManu":"Ford","carModel":"Fiesta ST","clutch":"Manual","horsePower":200,"cc":1500,"price":25187,"rating":88},{"id":4,"carManu":"Audi","carModel":"A1 S-Line","clutch":"Manual","horsePower":110,"cc":999,"price":29979,"rating":87},{"id":5,"carManu":"Opel","carModel":"Corsa GS-Line","clutch":"Auto DCT","horsePower":130,"cc":1200,"price":21288,"rating":85},{"id":6,"carManu":"Hyundai","carModel":"i-30 N","clutch":"Manual","horsePower":250,"cc":1999,"price":28750,"rating":82},{"id":7,"carManu":"Abarth","carModel":"595 Competizione","clutch":"Auto DCT","horsePower":180,"cc":1368,"price":26032,"rating":77},{"id":8,"carManu":"Volkswagen","carModel":"Golf Style","clutch":"Manual","horsePower":150,"cc":1498,"price":25938,"rating":78},{"id":9,"carManu":"Hyundai","carModel":"i-30 N Line","clutch":"Manual","horsePower":120,"cc":998,"price":20890,"rating":76},{"id":10,"carManu":"Hyundai","carModel":"i-20 N Line","clutch":"Manual","horsePower":100,"cc":999,"price":17480,"rating":74},{"id":11,"carManu":"Toyota","carModel":"Yaris Chic","clutch":"Manual","horsePower":125,"cc":1490,"price":18400,"rating":71},{"id":12,"carManu":"BMW","carModel":"116i M Sport","clutch":"Manual","horsePower":110,"cc":1499,"price":36994,"rating":60},{"id":13,"carManu":"Citroen","carModel":"C1 Shine","clutch":"Manual","horsePower":72,"cc":998,"price":13770,"rating":49},
             {"id":14,"carManu":"Peugeot","carModel":"208 GT Line","clutch":"Manual","horsePower":100,"cc":1199,"price":21700,"rating":76}],
             sort: {
               column: null,
               direction: 'desc',
             },
           };

  }
 /* componentDidMount() {
    $.ajax({
       url: "http://localhost:8080/cars/all",
       type: "GET",
       dataType: 'json',
       ContentType: 'application/json',
       success: function(data) {



         this.setState({data: data});
       }.bind(this),
       error: function(jqXHR) {
         console.log(jqXHR);
       }.bind(this)
    })
  } */

 onSort = (column) => (e) => {
    const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
    const sortedData = this.state.data.sort((a, b) => {
        if (column === 'id') {
            const id1 = a.id; // ignore upper and lowercase
            const id2 = b.id; // ignore upper and lowercase
            if (id1 < id2) {
              return -1;
            }
            if (id1 > id2) {
              return 1;
            }
            return 0;
      } else if (column === 'carManu') {
        const nameA = a.carManu.toUpperCase(); // ignore upper and lowercase
        const nameB = b.carManu.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }else if (column === 'carModel') {
        const nameA = a.carModel.toUpperCase(); // ignore upper and lowercase
        const nameB = b.carModel.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
           return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
      }
        else if (column === 'clutch') {
        const nameA = a.clutch.toUpperCase(); // ignore upper and lowercase
        const nameB = b.clutch.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
           return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
      }else if(column === 'HP'){
        const hpA = a.horsePower;
        const hpB = b.horsePower;
        if (hpA < hpB) {
            return -1;
        }
        if (hpA > hpB) {
            return 1;
        }

        return 0;
      }else if(column === 'CC'){
       const ccA = a.cc;
       const ccB = b.cc;
       if (ccA < ccB) {
           return -1;
       }
       if (ccA > ccB) {
           return 1;
       }
           return 0;
       }
       else if(column === 'price'){
       const priceA = a.price;
       const priceB = b.price;
       if (priceA < priceB) {
           return -1;
       }
       if (priceA > priceB) {
           return 1;
       }
           return 0;
       }else if(column === 'rating'){
              const ratingA = a.rating;
              const ratingB = b.rating;
              if (ratingA < ratingB) {
                  return -1;
              }
              if (ratingA > ratingB) {
                  return 1;
              }
                  return 0;
              }
    });

    if (direction === 'desc') {
      sortedData.reverse();
    }

    this.setState({
      data: sortedData,
      sort: {
        column,
        direction,
      }
    });
  };


setArrow = (column) => {
    let className = 'sort-direction';

    if (this.state.sort.column === column) {
      className += this.state.sort.direction === 'asc' ? ' asc' : ' desc';
    }

    console.log(className);

    return className;
  };




  render() {


    return (

      <table>
            <thead>
                <tr>
                    <th> <button onClick={this.onSort('id')}>Id </button>
                    <span className={this.setArrow('id')}></span> </th>
                    <th> <button onClick={this.onSort('carManu')}>Car Manufacturer </button>
                    <span className={this.setArrow('carManu')}></span> </th>
                    <th> <button onClick={this.onSort('carModel')}>Car Model </button>
                    <span className={this.setArrow('carModel')}></span> </th>
                    <th> <button onClick={this.onSort('clutch')}>Clutch Type </button>
                    <span className={this.setArrow('clutch')}></span> </th>
                    <th> <button onClick={this.onSort('HP')}>HorsePower </button>
                    <span className={this.setArrow('HP')}></span> </th>
                    <th> <button onClick={this.onSort('CC')}>Cubic Capacity </button>
                    <span className={this.setArrow('CC')}></span> </th>
                    <th> <button onClick={this.onSort('price')}>Price </button>
                    <span className={this.setArrow('price')}></span> </th>
                    <th> <button onClick={this.onSort('rating')}>Rating </button>
                    <span className={this.setArrow('rating')}></span> </th>
                </tr>
            </thead>
      <tbody>
      {this.state.data.map(function(item, key) {

               return (

                  <tr key = {key}>
                      <td>{item.id}</td>
                      <td>{item.carManu}</td>
                      <td>{item.carModel}</td>
                      <td>{item.clutch}</td>
                      <td>{item.horsePower}</td>
                      <td>{item.cc}</td>
                      <td>{item.price}</td>
                      <td>{item.rating}</td>
                  </tr>

                )
             })}</tbody>
       </table>

    )
  }
}

export default App;