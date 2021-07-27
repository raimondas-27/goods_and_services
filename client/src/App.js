import React, {Component} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import {Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import {deleteGoodOrService, getAllGoodsAndServices, postNewGoodsOrServices, filterByGoodOrService} from "./utils/requests";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import OrdersForm from "./components/OrdersForm";
import OrdersList from "./components/OrdersList";

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         allOrders: [],

         addingData: {
            name: "",
            price: "",
            quantity: "",
            description: "",
            length: "",
            type: "",
         },
      }
   }

   componentDidMount() {
      this.getAllGoodsAndServices()
   }

   getAllGoodsAndServices = async () => {
      const result = await getAllGoodsAndServices();
      console.log(result)
      this.setState({allOrders: result});
   };

   handleChangeAfterAdding = (event) => {
      const formDataCopy = {...this.state.addingData};
      formDataCopy[event.target.name] = event.target.value;
      this.setState({addingData: formDataCopy});
   }

   handleData = async (event) => {
      event.preventDefault();
      const postResult = await postNewGoodsOrServices(this.state.addingData)
      console.log(postResult)
      if (postResult) {
         await this.getAllGoodsAndServices()
         await toast.success("order added to list :)")
         event.target.value = '';
         await this.props.history.push('/');
      }
   }

   deleteGoodOrService = async (dataId) => {
      const deleteResult = await deleteGoodOrService(dataId)
      if (deleteResult) {
         await this.getAllGoodsAndServices();
         await toast.success("order deleted from list")
      }
   };

   //front-end filtering
   // filterByType = async (type) => {
   //    const allData = await getAllGoodsAndServices();
   //    const filteredData = allData.filter((element) => element.type === type)
   //    this.setState({allOrders : filteredData})
   // }

   //back-end filtering
   filterByType = async (type) => {
      const allData = await filterByGoodOrService(type);
      this.setState({allOrders : allData})
   }

   render() {

      return (
          <div>
             <ToastContainer/>
             <NavBar/>
             <Switch>
                <Route exact path="/" render={(props) => (
                    <OrdersList allOrders={this.state.allOrders}
                                getOrders={this.getAllGoodsAndServices}
                                onDelete={this.deleteGoodOrService}
                                onFilterByType={this.filterByType}
                                {...props}

                    />
                )}>
                </Route>
                <Route path="/formToCreateGoodOrService" render={(props) => (
                    <OrdersForm onHandleData={this.handleData}
                                onHandleChange={this.handleChangeAfterAdding}
                                {...props}

                    />
                )}>
                </Route>
             </Switch>
             <Footer/>
          </div>
      );
   }
}

export default withRouter(App);


