// Village
const colorsObject = { white: "#FFFFFF", lightGray: "#A6BECF", darkGray: "#819CAF", brown: "#BE845F", navy: "#27354A" }

class Koala extends React.Component {
  render() {
    return <Box colors={ this.props.colors } />;
  }
}

// Neighborhood
class Box extends React.Component {
  render() {
    return (
      <div className="box">
        {/* Houses */ }
        <Head colors={ this.props.colors } />
        <Nose color={ this.props.colors.brown } />
        <HairLeft color={ this.props.colors.lightGray } />
        <HairRight color={ this.props.colors.lightGray } />
        { /* Blocks */ }
        <EyeLeft colors={ this.props.colors } />
        <EarLeft colors={ this.props.colors } />
        <EyeRight colors={ this.props.colors } />
        <EarRight colors={ this.props.colors } />
      </div>);
  }
}

class Head extends React.Component {

  state = { color: this.props.colors.darkGray };

  setColorTo = colorToSet => {
    this.setState({ color: colorToSet });
  }

  updateColor = () => {

    if (this.state.color === this.props.colors.darkGray)
    {
      this.setColorTo(this.props.colors.white);
    }
    else
    {
      this.setColorTo(this.props.colors.darkGray);
    }
  }

  render() {

    return (
      <div onClick={ this.updateColor } style={ { background: this.state.color } } className="head"></div>
    )
  }
}

class Nose extends React.Component {
  render() {
    return <div style={ { background: this.props.color } } className="nose"></div>
  }
}

class HairLeft extends React.Component {
  render() {
    return <div style={ { background: this.props.color } } className="hair-left"></div>
  }
}

class HairRight extends React.Component {
  render() {
    return <div style={ { background: this.props.color } } className="hair-right"></div>
  }
}

//blocks
class EyeLeft extends React.Component {
  render() {
    return (
      <div>
        <OuterEyeLeft color={ this.props.white } />
        <InnerEyeLeft color={ this.props.navy } />
      </div>
    )
  }
}

class OuterEyeLeft extends React.Component {
  render() {
    return (
      <div style={ { background: this.props.color } } className="outer-eye-left"></div>
    )
  }
}

class InnerEyeLeft extends React.Component {
  render() {
    return <div style={ { background: this.props.color } } class="pupil-left"></div>
  }
}

class EyeRight extends React.Component {
  render() {
    return (
      <div>
        <OuterEyeRight color={ this.props.white } />
        <InnerEyeRight color={ this.props.navy } />
      </div>
    )
  }
}

class OuterEyeRight extends React.Component {
  render() {
    return (
      <div style={ { background: this.props.color } } className="outer-eye-right"></div>
    )
  }
}

class InnerEyeRight extends React.Component {
  render() {
    return <div style={ { background: this.props.color } } class="pupil-right"></div>
  }
}

class EarLeft extends React.Component {
  render() {
    return (
      <div>
        <OuterEarLeft color={ this.props.colors.lightGray } />
        <InnerEarLeft color={ this.props.colors.darkGray } />
      </div>
    )
  }
}

class OuterEarLeft extends React.Component {
  render() {
    return <div className="outer-ear-left"></div>;
  }
}

class InnerEarLeft extends React.Component {
  render() {
    return <div className="inner-ear-left"></div>;
  }
}

class EarRight extends React.Component {
  render() {
    return (
      <div>
        <OuterEarRight color={ this.props.colors.lightGray } />
        <InnerEarRight color={ this.props.colors.darkGray } />
      </div>
    )
  }
}

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

ReactDOM.render(<Koala colors={ colorsObject } />, document.getElementById("koala"));
