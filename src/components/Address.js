import React, { Component } from 'react'
import './css/Address.css'

export class Address extends Component {
    constructor(props) {
      super(props);
      this.state = {
        address: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('New Address : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="container">
                <label>
                    <div className="address"> Current Address: {this.state.address} </div>
                </label>
                <label>
                    <div className="address"> New Address:
                        <textarea value={this.state.address} onChange={this.handleChange} />
                    </div>
                </label>
                <div className="submit">
                    <input type="submit" value="Submit" />
                </div>
            </div>
        </form>
      );
    }
  }

  export default Address