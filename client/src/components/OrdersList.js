import React, {Component} from 'react';
import OrdersItem from "./OrdersItem";
import "../App.css"

class OrdersList extends Component {
   state = {}

   render() {

      return (
          <div className={"container"}>
             <button onClick={() => this.props.onFilterByType("good")}
                     type="button"
                     className="btn btn-primary"> Filter by Goods</button>
             <button onClick={() => this.props.onFilterByType("service")}
                     type="button"
                     className="btn btn-success"> Filter by Services</button>
             <button onClick={() => this.props.getOrders()}
                     type="button"
                     className="btn btn-info">All orders</button>
             <div className={"items-container"}>
                {this.props.allOrders.map((oneGoodOrItem) => (
                    <OrdersItem oneGoodOrItem={oneGoodOrItem}
                                onDelete={this.props.onDelete}
                                onGetOrders={this.props.onGetOrders}
                                key={oneGoodOrItem._id}
                    />
                ))}
             </div>
          </div>
      );
   }
}

export default OrdersList;