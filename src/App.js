import React, { Component } from 'react';
import CircularAvatar from './components/CircularAvatar';
import Timeline from './components/Timeline';
import './App.scss';
import avatar from './assets/avatar.jpg';

class App extends Component {
  render() {
    return (
      <main className="app">
        <header className="header">
          <CircularAvatar src={avatar}></CircularAvatar>
          <h1>Hello,</h1>
          <h2>My name is Kamil 24yo and this is my resume/cv</h2>
        </header>
        <div className="br" />
        <h3>About Me</h3>
        <p>Lorem ipsum dolor sit amet,...</p>
        <h3>Education</h3>
        <Timeline></Timeline>
        <h4></h4>
      </main>
    );
  }
}

export default App;
