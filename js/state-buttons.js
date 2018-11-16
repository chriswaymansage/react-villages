class Buttons extends React.Component {

  state = { clicks1: 0, clicks2: 0 };


  // updateButton1 = () => {
  //   this.setState({ clicks1: this.state.clicks1 += 1 });
  // }

  // updateButton2 = () => {
  //   this.setState({ clicks2: this.state.clicks2 += 1 });
  // }

  // updateButton2() {
  //   this.setState(function (prevstate) {
  //     return { clicks2: prevstate.clicks2 += 1 }
  //   });
  // }

  // updateButton = function (buttonName) {
  //   return function () {
  //     this.setState({ [buttonName]: this.state[buttonName] += 1 });
  //   }
  // }

  updateButton = buttonName => () => {
    this.setState({ [buttonName]: this.state[buttonName] += 1 });
  }

  render() {
    return (
      <div>
        <button onClick={ this.updateButton("clicks1") }>{ this.state.clicks1 }</button>
        <br /> <br />
        <button onClick={ this.updateButton("clicks2") }>{ this.state.clicks2 }</button>
      </div>
    )
  }
}

//"inject" to DOM
ReactDOM.render(
  <Buttons />,
  document.getElementById('state-buttons')
);