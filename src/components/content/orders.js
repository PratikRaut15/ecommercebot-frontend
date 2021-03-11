import axios from "axios";
import api from "../../axios";

import React, { Component } from "react";

export default class orders extends Component {
  state = {
    arrData: [],
  };

  componentDidMount() {
    axios
      .post(`${api}getAllOrders`)
      .then((res) => this.setState({ arrData: res.data }))
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    axios
      .post(`${api}getAllOrders`)
      .then((res) => this.setState({ arrData: res.data }))
      .catch((err) => console.log(err));
  }
  render() {
    console.log("api", api);
    if (this.state.arrData.length > 0) {
    }
    return (
      <>
        <p class="h3 well">Orders</p>

        <table class="table table-hover ">
          <tr>
            <th>
              <center>OrderId</center>
            </th>
            <th>
              <center>Product name</center>
            </th>
            <th>
              <center>Status</center>
            </th>
          </tr>
          <tbody>
            {this.state.arrData.map((res) => (
              <tr>
                <td>
                  <center>{res.order_id}</center>
                </td>
                <td>
                  <center>{res.product_name}</center>
                </td>
                <td>
                  <center>{res.status}</center>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
