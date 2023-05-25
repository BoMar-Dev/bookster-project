import React from "react";
import { GuestPage } from "./GuestPage";

export const UserPage = () => {
  return (
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
  )
}
