import axios from "axios";

import React, { Component } from "react";

export default class Cancellation extends Component {
  state = {
    arrData: [],
  };
  componentDidMount() {
    axios
      .post("http://localhost:3000/getAllCancellationDetails")
      .then((res) => {
        console.log(res);
        this.setState({ arrData: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    if (this.state.arrData.length > 0) {
      return (
        <>
          <p class="h3 well">Delivery</p>

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
              <th>
                <center>Reason</center>
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

                  <td>
                    <center>{res.reason}</center>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    } else {
      return (
        <>
          <p class="h3 well text-danger">
            <center>
              <i>Status : No orders cancelled</i>
            </center>
          </p>
        </>
      );
    }
  }
}
