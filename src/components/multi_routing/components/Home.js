import React from 'react';
var service = require('./service')

export default class Home extends React.Component {
  state = {
    url: ""
  }
  componentDidMount() {
    service.subject.subscribe((v) => {
      this.setState({ url: v })
    });
  }
  updateImage() {
    const arr = [
      "https://randomuser.me/api/portraits/men/79.jpg",
      "https://randomuser.me/api/portraits/women/20.jpg",
      "https://randomuser.me/api/portraits/men/61.jpg",
      "https://randomuser.me/api/portraits/women/66.jpg",
      "https://randomuser.me/api/portraits/men/34.jpg"
    ];
    let random_url = arr[Math.floor(Math.random() * arr.length)]
    service.updateImage(random_url)
  }
  render = () => (
    <React.Fragment>
      <h1>Home works</h1>
      <img src={this.state.url} alt="" />
      {this.state.url}
      <button onClick={this.updateImage}>Change Image</button>
    </React.Fragment>
  );
}