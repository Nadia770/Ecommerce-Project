import React from 'react'
import Button from "react-bootstrap/Button";

export default function Checkout(props) {
  let totalCartPrice = 0
  return (
    <div>
    <section className="py-5">
           <div className="container px-4 px-lg-5 my-5">
           <div className="row">
           <div className="col-md-4 order-md-2 mb-4">
               <h4 className="d-flex justify-content-between align-items-center mb-3">
               <span className="text-muted">Your cart</span>
               <span className="badge badge-secondary badge-pill">3</span>
               </h4>
               <ul className="list-group mb-3">
              { props.cart.map((product) => {
            totalCartPrice += product.count * product.price
    return (
      <li key={product.id} className="list-group-item d-flex justify-content-between lh-condensed">
                   <div>
                   <h6 className="my-0">{product.name}</h6>
                   <small className="text-muted">{product.description}</small>
                   </div>
                   <span className="text-muted">£{product.price}</span>
                   
               </li>
              )})}
               <li className="list-group-item d-flex justify-content-between bg-light">
                   <div className="text-success">
                   <h6 className="my-0">Promo code</h6>
                   <small>FIRSTTIMEBUYER</small>
                   </div>
                   <span className="text-success">-£1</span>
               </li>
               <li className="list-group-item d-flex justify-content-between">
                   <span>Total (GBP)</span>
                   <strong>£{totalCartPrice - 1}</strong>
               </li>
               </ul>
           </div>
           <div className="col-md-8 order-md-1">
               <h4 className="mb-3">Billing address</h4>
               <form>
               <div className="row">
                   <div className="col-md-6 mb-3">
                   <label htmlFor="firstName" className="form-label">First name</label>
                   <input type="text" className="form-control" id="firstName" placeholder=""  required />
                   <div className="invalid-feedback">
                       Valid first name is required.
                   </div>
                   </div>
                   <div className="col-md-6 mb-3">
                   <label htmlFor="lastName" className="form-label">Last name</label>
                   <input type="text" className="form-control" id="lastName" placeholder=""  required />
                   <div className="invalid-feedback">
                       Valid last name is required.
                   </div>
                   </div>
               </div>
               <div className="mb-3">
                   <label htmlFor="username" className="form-label">Username</label>
                   <div className="input-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text">@</span>
                   </div>
                   <input type="text" className="form-control" id="username" placeholder="Username" required />
                   <div className="invalid-feedback">
                       Your username is required.
                   </div>
                   </div>
               </div>
               <div className="mb-3">
                   <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                   <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                   <div className="invalid-feedback">
                   Please enter a valid email address for shipping updates.
                   </div>
               </div>
               <div className="mb-3">
                   <label htmlFor="address" className="form-label">Address</label>
                   <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                   <div className="invalid-feedback">
                   Please enter your shipping address.
                   </div>
               </div>
               <div className="row">
                   <div className="col-md-5 mb-3">
                   <label htmlFor="country" className="form-label">Country</label>
                   <select className="form-select d-block w-100" id="country" required>
                       <option>Choose...</option>
                       <option>United Kingdom</option>
                   </select>
                   <div className="invalid-feedback">
                       Please select a valid country.
                   </div>
                   </div>
                   <div className="col-md-4 mb-3">
                   <label htmlFor="city" className="form-label">City</label>
                   <select className="form-select d-block w-100" id="city" required>
                       <option>Choose...</option>
                       <option>London</option>
                       <option>Kent</option>
                   </select>
                   <div className="invalid-feedback">
                       Please provide a valid city.
                   </div>
                   </div>
                   <div className="col-md-3 mb-3">
                   <label htmlFor="zip" className="form-label">Postcode</label>
                   <input type="text" className="form-control" id="postcode" placeholder="" required />
                   <div className="invalid-feedback">
                       Postcode required.
                   </div>
                   </div>
               </div>
               <hr className="mb-4" />
               <div className="form-check">
                   <input type="checkbox" className="form-check-input" id="same-address" />
                   <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
               </div>
               <div className="form-check">
                   <input type="checkbox" className="form-check-input" id="save-info" />
                   <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
               </div>
               <hr className="mb-4" />
               <h4 className="mb-3">Payment</h4>
               <div className="d-block my-3">
                   <div className="form-check">
                   <input id="credit" name="paymentMethod" type="radio" className="form-check-input"  />
                   <label className="form-check-label" htmlFor="credit">Credit card</label>
                   </div>
                   <div className="form-check">
                   <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                   <label className="form-check-label" htmlFor="debit">Debit card</label>
                   </div>
                   <div className="form-check">
                   <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                   <label className="form-check-label" htmlFor="paypal">Paypal</label>
                   </div>
               </div>
               <div className="row">
                   <div className="col-md-6 mb-3">
                   <label htmlFor="cc-name" className="form-label">Name on card</label>
                   <input type="text" className="form-control" id="cc-name" placeholder="" required />
                   <small className="text-muted">Full name as displayed on card</small>
                   <div className="invalid-feedback">
                       Name on card is required
                   </div>
                   </div>
                   <div className="col-md-6 mb-3">
                   <label htmlFor="cc-number" className="form-label">Credit card number</label>
                   <input type="text" className="form-control" id="cc-number" placeholder="" required />
                   <div className="invalid-feedback">
                       Credit card number is required
                   </div>
                   </div>
               </div>
               <div className="row">
                   <div className="col-md-3 mb-3">
                   <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                   <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                   <div className="invalid-feedback">
                       Expiration date required
                   </div>
                   </div>
                   <div className="col-md-3 mb-3">
                   <label htmlFor="cc-expiration" className="form-label">CVV</label>
                   <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                   <div className="invalid-feedback">
                       Security code required
                   </div>
                   </div>
               </div>
               <hr className="mb-4" />
               <Button>Place order</Button>
               </form>
           </div>
           </div>
       </div>
       </section>
    
   </div>
  )
}
