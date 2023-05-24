import SearchField from "../components/SearchField";
import OverAllPage from "./OverAllPage";
import React from "react";

export const UserPage = () => {
  return (
    <div className='user-container'>
        < SearchField />
        < OverAllPage/>
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
  )
}
