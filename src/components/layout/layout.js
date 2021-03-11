import React, { Component } from "react";
import Header from "../header/header";

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <div class="row">
          <div class="col-md-2">{/* Azure Bot */}</div>
          <div class="col-md-8">{this.props.children}</div>

          <div class="col-md-2">
            {/* Google DialogFlow Bot */}
            <df-messenger
              intent="WELCOME"
              chat-title="Norma"
              chat-icon="https://www.iconninja.com/files/280/963/747/fav-google-new-logo-icon.svg"
              agent-id="1be3da83-4afe-46c5-9fd9-7dad08e96c9c"
              language-code="en"
            ></df-messenger>
          </div>
        </div>
      </>
    );
  }
}

export default Layout;
