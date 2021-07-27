import React, {Component} from 'react';
import "../App.css"
import {editGoodOrService} from "../utils/requests";
import {toast} from "react-toastify";

class OrdersItem extends Component {
   constructor(props) {
      super(props);

      this.state = {
         edit: {
            _id: this.props.oneGoodOrItem._id,
            name: this.props.oneGoodOrItem.name,
            price: this.props.oneGoodOrItem.price,
            quantity: this.props.oneGoodOrItem.quantity,
            description: this.props.oneGoodOrItem.description,
            length: this.props.oneGoodOrItem.length,
            type: this.props.oneGoodOrItem.type,
         },

         isEdit: false,
      }
   }

   handleChangeAfterEditing = (event) => {
      const editCopy = {...this.state.edit}
      editCopy[event.target.name] = event.target.value;
      this.setState({edit: editCopy})
   }

   toggleEdit = () => {
      this.setState({isEdit: !this.state.isEdit});
   }

   handleEditData = async (id, itemBody) => {
      const editResult = await editGoodOrService(id, itemBody)
      if (editResult) {
         await this.setState({isEdit: false})
         await this.props.onGetOrders
         toast.success("the order has been changed")
      }
   }


   render() {

      const {_id, name, price, quantity, description, length, type} = this.state.edit;

      return (
          <div className={"orders-container"}>
             {!this.state.isEdit ? (
                 <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                       <h5 className="card-title">Name : {name}</h5>
                       <h6 className="card-subtitle mb-2 mt-4 text-muted">Price : {price}</h6>
                       <p className="card-text">Quantity : {quantity}</p>
                       <p className="card-text"> Description : {description}</p>
                       {this.props.oneGoodOrItem.length ?
                           <p className="card-text">Length : {length}</p> : ""}
                       <p className="card-text">Order Type : {type}</p>
                       <button onClick={() => this.toggleEdit(_id)}
                               type="button"
                               className="btn btn-warning">Edit
                       </button>
                       <button onClick={() => this.props.onDelete(_id)}
                               type="button"
                               className="btn btn-danger">Delete
                       </button>
                    </div>
                 </div>
             ) : (
                 <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                       <h5 className="card-title">Name : {name}</h5>
                       <input type="text" value={name} onChange={this.handleChangeAfterEditing} name="name"/>
                       <h6 className="card-subtitle mb-2 mt-4 text-muted">Price : {price}</h6>
                       <input type="text" value={price} onChange={this.handleChangeAfterEditing} name="price"/>
                       <p className="card-text">Quantity : {quantity}</p>
                       <input type="text" value={quantity} onChange={this.handleChangeAfterEditing} name="quantity"/>
                       <p className="card-text"> Description : {description}</p>
                       <input type="text" value={description} onChange={this.handleChangeAfterEditing}
                              name="description"/>
                       <p className="card-text"> Length : {length}</p>
                       <input type="text" value={length || ""} onChange={this.handleChangeAfterEditing} name="length"/>
                       <p className="card-text">Order Type : {type}</p>
                       <input type="text" value={type} onChange={this.handleChangeAfterEditing} name="type"/>
                       <button type="button" className="btn btn-info"
                               onClick={() => this.handleEditData(_id, this.state.edit)}> Save
                       </button>
                    </div>
                 </div>
             )}
          </div>
      );
   }
}

export default OrdersItem;