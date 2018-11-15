class Buttons extends React.Component {

  state = { clicks1: 0, clicks2: 0 };

  updateButton1 = () => {
    this.setState({ clicks1: this.state.clicks1 += 1 });
  }

  updateButton2 = () => {
    this.setState({ clicks2: this.state.clicks2 += 1 });
  }

  // this.setState(function (prevState) {
  //   return { clicks2: prevState.clicks2 += 1 }
  // });

  render() {
    return (
      <div>
        <button onClick={this.updateButton1}>{this.state.clicks1}</button>
        <br /><br />
        <button onClick={this.updateButton2}>{this.state.clicks2}</button>
      </div>
    )
  }
}

//"inject" to DOM
ReactDOM.render(
  <Buttons />,
  document.getElementById('state-buttons')
);