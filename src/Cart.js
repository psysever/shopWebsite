import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Quan</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({
                        type: "QuanUp",
                        data: a.id,
                      });
                    }}
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "QuanDown", data: a.id });
                    }}
                  >
                    ↓
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.alertopen === true ? (
        <div className="my-alert2">
          <p>If you order it now, New Discount 20%</p>
          <button
            onClick={() => {
              props.dispatch({ type: "alertclose" });
            }}
          >
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
}

function statetoprops(state) {
  return {
    state: state.reducer,
    alertopen: state.reducer2,
  };
}

export default connect(statetoprops)(Cart);
