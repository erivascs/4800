import React, { Component } from "react";
import Navbar from "./Navbar";
import "./css/Stores.css";
import DynamicForm from "./DynamicForm";

class Stores extends Component {
    constructor() {
        super();
        this.state = {
            stores: [
                {
                    id: 1,
                    name: "Walmart",
                    phone: "123-456-7890",
                    address: "123 Street",
                    img:
                        "https://1000logos.net/wp-content/uploads/2017/05/Walmart-logo.png",
                },
            ],
            items: [],
            isLoaded: false,
        };
        
        this.getStores = this.getStores.bind(this);
    }

    componentDidMount() {
        fetch("/stores")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    isLoaded: true,
                    items: json,
                });
            });
    }

    getStores(event) {
        fetch("/stores", {
            method: "POST",
            headers: {
                // 'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })
            .then((Response) => Response.json())
            .then((json) => {
                this.setState({
                    items: json,
                    isLoaded: true,
                });
            });
    }

    /* Testing
  handleClick = () => {
    console.log(this.state.stores[0].name)
    console.log(this.state.stores[0].phone)
    console.log(this.state.stores[0].address)
  }
  */

    render() {
        return (
            <div className="storesContainer">
                <div className="storeImg">
                    <img src={this.state.stores[0].img} />
                    <div className="imgOverlay">
                        <div className="storeName">
                            {this.state.stores[0].name}
                            <br />
                            {this.state.stores[0].address}
                            <br />
                            {this.state.stores[0].phone}
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Stores;
