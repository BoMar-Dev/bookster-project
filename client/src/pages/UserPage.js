import React from "react";
import getJwtInfo from '../utils/getJwtInfo';
import { GuestPage } from "./GuestPage";
import { useNavigate } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";


export const UserPage = () => {
  const navigate = useNavigate();
  
  PageNavigation();

  return (
    <>
    <div className='user-container'>
        < GuestPage />
        <section>
            <h2>Order</h2>
            <div>
                <p>-</p>
                <span>0</span>
                <p>+</p>
            </div>
            <button>order</button>
        </section>
    </div>
    </>
  )
}
