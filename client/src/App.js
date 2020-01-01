import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import StackableMenu from './components/StackableMenu'
import socketIOClient from "socket.io-client";
import { Button } from 'semantic-ui-react'
import Blockchain from './components/Blockchain';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      endpoint: "http://127.0.0.1:5000",
      text: [],
      feedbacks: [],
      sideBarVisible: true,
      socket: ""
    }
  }

  componentDidMount() {
    const { endpoint } = this.state;

  }

  componentWillMount() {
    axios.get('/api/teachers').then(res => {
      console.log(res.data)
      this.setState({ text: res.data });
    })


  }

  click() {
    const { endpoint } = this.state;
  }

  getlist() {
    return this.state.text.map((element, key) =>
      <li key>{element.fullName}</li>)
  }

  render() {
    return (
      <div className="App" >
        <StackableMenu visible={this.state.sideBarVisible} feedbacks={this.state.feedbacks}></StackableMenu>
        {/* <Blockchain></Blockchain> */}
      </div >
    );
  }
}

export default App;