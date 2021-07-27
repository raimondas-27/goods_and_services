import axios from "axios";
const baseUrl = 'http://localhost:4000';


//get all data
export const getAllGoodsAndServices = async () => {
   try {
      const res = await axios.get(`${baseUrl}/api/allOrders`);
      return res.data;
   } catch (err) {
      console.log(err);
   }
};

//post new data
export const postNewGoodsOrServices = async (formData) => {
   try {
      const res = await axios.post(`${baseUrl}/api/allOrders/new`, formData)
      return res.data
   } catch (err) {
      console.log(err.message)
   }
}

//delete selected data

export const deleteGoodOrService = async (dataId) => {
   try {
      const res = await axios.delete(`${baseUrl}/api/allOrders/delete/${dataId}`)
      return res.data
   } catch (err) {
      console.log(err.message)
   }
}

//edit selected data

export const editGoodOrService = async (id, body) => {
   console.log(body)
   try {
      const res = await axios.put(`${baseUrl}/api/allOrders/edit/${id}`, body)
      console.log(res.data)
      return res.data;
   } catch (err) {
      console.log(err.message)
   }
}

//filter selected data

export const filterByGoodOrService = async (type) => {

   try {
      const res = await axios.get(`${baseUrl}/api/allOrders/${type}`)
      console.log(res.data)
      return res.data;
   } catch (err) {
      console.log(err.message)
   }
}