import axios from "axios";
import React, { Component } from "react";

class Product extends Component {
  state = {
    data: [],
    c_state: "",
    c_city: "",
    product: "",
    c_staetList: [],
    c_cityList: [],
    productList: [],
  };

  componentDidMount = () => {
    this.getDataFromApi();
  };

  render() {
    return (
      <>
        <div></div>
      </>
    );
  }

  getDataFromApi = () => {
    axios.get("https://assessment-edvora.herokuapp.com/").then((res) => {
      console.log(res.data);
    });
  };
}

export default Product;
