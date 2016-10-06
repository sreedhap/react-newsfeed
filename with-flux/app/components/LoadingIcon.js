import React from "react";
import LoadingIconStore from "../stores/LoadingIconStore";

class LoadingIcon extends React.Component{

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = {
      isLoading: LoadingIconStore.isLoading()
    };
  }

  _onChange() {
    this.setState({ isLoading: LoadingIconStore.isLoading() });
  }

  componentDidMount() {
    LoadingIconStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    LoadingIconStore.removeChangeListener(this._onChange);
  }

  render() {
    if(this.state.isLoading) {
      return <p className="loading">...</p>;
    } else {
      return null;
    }
  }
}

export default LoadingIcon;