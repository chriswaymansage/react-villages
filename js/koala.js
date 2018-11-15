//village
class Koala extends React.Component {
  render() {
    return <Box />;
  }
}

//neighborhood
class Box extends React.Component {
  render() {
    return (
      <div className="box">
        <EarRight />
        <Head />
      </div>);
  }
}

class Head extends React.Component {
  render() {
    return <div className="head"></div>;
  }
}

//blocks
// class EarLeft extends React.Component {
//   render() {
//     return (
//     )
//   }
// }

class EarRight extends React.Component {
  render() {
    return (
      <div>
        <OuterEarRight />
        <InnerEarRight />
      </div>);
  }
}

// class EyeLeft extends React.Component {
//   render() {
//     return (

//     )
//   }
// }

// class EyeRight extends React.Component {
//   render() {
//     return (
//     )
//   }
//}

class OuterEarRight extends React.Component {
  render() {
    return <div className="outer-ear-right"></div>;
  }
}

class InnerEarRight extends React.Component {
  render() {
    return <div className="inner-ear-right"></div>;
  }
}

ReactDOM.render(<Koala />, document.getElementById("koala"));
