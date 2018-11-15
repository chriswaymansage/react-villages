class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button>{this.props.text1}</button>
        <br /><br />
        <button>{this.props.text2}</button>
      </div>
    );
  }
}

//"inject" to DOM
ReactDOM.render(
  <Buttons text1="Button 1" text2="Button 2" />,
  document.getElementById('props-buttons')
);