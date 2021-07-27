import React, {Component} from 'react';
import "../App.css"

class OrdersForm extends Component {
   constructor() {
      super();
      
      this.state = {

      }
   }

   render() {
      return (
          <div>
             <form onSubmit={this.props.onHandleData}
                   onChange={this.props.onHandleChange}
                   className={"form-container"}>

                <div className="form-group">
                   <label htmlFor="name">Enter name :</label>
                   <input type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="name"
                   />
                </div>
                <div className="form-group">
                   <label htmlFor="price">Enter price :</label>
                   <input type="text"
                          name="price"
                          className="form-control"
                          id="price"
                          placeholder="price"/>
                </div>
                <div className="form-group">
                   <label htmlFor="quantity">Enter quantity :</label>
                   <input type="text"
                          name="quantity"
                          className="form-control"
                          id="quantity"
                          placeholder="quantity"/>
                </div>
                <div className="form-group">
                   <label htmlFor="description">Short description :</label>
                   <input type="text"
                          name="description"
                          className="form-control"
                          id="description"
                          placeholder="describe:"/>
                </div>
                <div className="form-group">
                   <label htmlFor="length">Length :</label>
                   <input type="text"
                          name="length"
                          className="form-control"
                          id="length"
                          placeholder="not needed if good"/>
                </div>
                <div className="form-group">
                   <label htmlFor="type">Order type :</label>
                   <input type="text"
                          name="type"
                          className="form-control"
                          id="type"
                          placeholder="good or service?"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
             </form>
          </div>
      );
   }
}

export default OrdersForm;