import React from 'react'
import { useNavigate } from 'react-router-dom';
import getJwtInfo from '../utils/getJwtInfo';
import { useEffect } from 'react';

function PageNavigation() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("user")
        if(token === null){
          navigate("/guest");
        }
        if(getJwtInfo()?.role === "ADMIN"){
          navigate("/admin/books")
        }
        if(getJwtInfo()?.role === "USER"){
          navigate("/user")
        }
      }, []);
}

export default PageNavigation