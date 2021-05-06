import React, { useState, useContext, lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from "react-bootstrap";
import Data from "./data.js";
import Detail from "./Detail.js";

import { Link, Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import Cart from "./Cart.js";

export let stockcontext = React.createContext();
let stockcontext2 = React.createContext();

function App() {
  let [shoes, shoesChange] = useState(Data);
  let [stock, stockChange] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">&ensp;CMShose SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/detail">Detail</Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% Season OFF</h1>
            <p>
              This is CHANG MO JUNG.<br></br> Thanks for visit my website.
              <br></br>I m'still trying to update set lots of function on this
              react web site.
            </p>
            <p>
              <Button variant="danger">Learn more</Button>
            </p>
          </Jumbotron>

          <div className="container">
            <stockcontext.Provider value={stock}>
              <div className="row">
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i}></Card>;
                })}
              </div>
            </stockcontext.Provider>

            <Button
              variant="danger"
              onClick={() => {
                axios.post();

                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then(result => {
                    console.log(result.data);
                    shoesChange([...shoes, ...result.data]);
                  })
                  .catch(() => {
                    console.log("fail");
                  });
              }}
            >
              More
            </Button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <stockcontext.Provider value={stock}>
            <Detail shoes={shoes} stock={stock} stockChange={stockChange} />
          </stockcontext.Provider>
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  let stock = useContext(stockcontext);
  let history = useHistory();

  return (
    <div
      className="col-md-4"
      onClick={() => {
        history.push("/detail/" + props.i);
      }}
    >
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      <Test></Test>
    </div>
  );
}

function Test() {
  let stock = useContext(stockcontext);
  return <p>Stock : {stock[0]}</p>;
}

export default App;
