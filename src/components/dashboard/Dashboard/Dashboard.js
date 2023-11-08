import React, { Component, useEffect } from "react";
import { useApiService } from "../../../utils/Api.service";

const Dashboard =  () => {
const apiService = useApiService();

  useEffect(() => {
    apiService.getProducts()
    .then((response) => {
      console.log("response",response)
    })
    .catch((error) => {
      console.log("error",error)
    })
  },[])


  return (
   <div>Dashboard</div>
  )
}

export default Dashboard;
