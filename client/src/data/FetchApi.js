import { useEffect, useState } from "react";

export default async function fetchApi(url, method, data) {
  const fetchOptions = {
      method: method,
      headers:{authorization: `Bearer ${sessionStorage.getItem("user")}`,
      "Content-Type": "application/json",}
  };

  if(method !== "GET" && data !== undefined){
      fetchOptions.body = JSON.stringify(data);
  }

  return fetch(url, fetchOptions)
}
