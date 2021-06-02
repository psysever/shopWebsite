import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import "./Detail.scss";
import { stockcontext } from "./App.js";
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

let BOX = styled.div`
  padding-top: 50px;
`;

let TITLE = styled.h4`
  font-size: 25px;
  color: ${props => props.colcg};
`;

function Detail(props) {
  let [alert, alertChange] = useState(true);
  let [inputData, inputDataCHG] = useState("");
  let stock = useContext(stockcontext);
  let [tab, tabchange] = useState(0);
  let [switch1, switchChange1] = useState(false);

  useEffect(() => {
    let Timer = setTimeout(() => {
      alertChange(false);
    }, 3000);
    return () => {
      clearTimeout(Timer);
    };
  }, []);

  let { id } = useParams();
  let history = useHistory();
  let findProduct = props.shoes.find(function (product) {
    return product.id == id;
  });

  useEffect(() => {
    var arr = localStorage.getItem("watched");
    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(arr);
    }

    arr.push(id);
    arr = new Set(arr);
    arr = [...arr];

    localStorage.setItem("watched", JSON.stringify(arr));
  }, []);

  return (
    <div className="container">
      <BOX>
        <TITLE className="red">Detail</TITLE>
      </BOX>

      {/* <input
        onChange={e => {
          inputDataCHG(e.target.value);
        }}
      /> */}

      {alert === true ? (
        <div className="my-alert2">
          <p>Nearly out of stock</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://psysever.github.io/shoespic/shop/shoes" + id + ".jpg"}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}</p>
          <Info stock={props.stock}></Info>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.stockChange([9, 11, 12]);
              props.dispatch({
                type: "PDUpdate",
                data: {
                  id: findProduct.id,
                  name: findProduct.title,
                  quan: 1,
                },
              });
              history.push("/cart");
            }}
          >
            Order
          </button>
          &ensp;
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            BACK
          </button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              switchChange1(false);
              tabchange(0);
            }}
          >
            Product Detail
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              switchChange1(false);
              tabchange(1);
            }}
          >
            Shipping Info
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={switch1} classNames="wow" timeout={500}>
        <TabContent tab={tab} switchChange1={switchChange1}></TabContent>
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.switchChange1(true);
  });

  if (props.tab === 0) {
    return <div> 0st Content</div>;
  } else if (props.tab === 1) {
    return <div>1st Content</div>;
  } else if (props.tab === 2) {
    return <div>2st Content</div>;
  }
}

function Info(props) {
  return <p>Stock : {props.stock[0]} </p>;
}

function statetoprops(state) {
  return {
    state: state.reducer,
    alertopen: state.reducer2,
  };
}

export default connect(statetoprops)(Detail);
