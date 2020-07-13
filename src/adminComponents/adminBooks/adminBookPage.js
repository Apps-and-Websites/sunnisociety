import React, { Component } from "react";

import AdminBookTable from "./adminBookTable";

import BookTable from "./bookTable.js";

class AdminBookPage extends Component {
  render() {
    return (
      <section>
        <BookTable />
      </section>
    );
  }
}

export default AdminBookPage;
