import React from "react";
const CartPage_ContactDeliveryInfo = () => {
  return (
    <React.StrictMode>
      <div className="col-md-9">
        <article className="card mb-4">
          <div className="card-body">
            <h4 className="card-title mb-4">Contact info</h4>
            <form action="">
              <div className="row">
                <div className="form-group col-sm-6">
                  <label>Frst name</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label>Last name</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label>Phone</label>
                  <input type="text" value="+998" className="form-control" />
                </div>
                <div className="form-group col-sm-6">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="form-control"
                  />
                </div>
              </div>
            </form>
          </div>
        </article>
        <article className="card mb-4">
          <div className="card-body">
            <h4 className="card-title mb-4">Delivery info</h4>
            <form action="">
              <div className="row">
                <div className="form-group col-sm-6">
                  <label className="js-check box active">
                    <input type="radio" name="dostavka" value="option1" />
                    <h6 className="title">Delivery</h6>
                    <p className="text-muted">We will deliver by DHL Kargo</p>
                  </label>
                </div>
                <div className="form-group col-sm-6">
                  <label className="js-check box">
                    <input type="radio" name="dostavka" value="option1" />
                    <h6 className="title">Pick-up</h6>
                    <p className="text-muted">
                      Come to our office to somewhere{" "}
                    </p>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-6">
                  <label>City*</label>
                  <select name="" className="form-control">
                    <option value="">Tashkent</option>
                    <option value="">Buxoro</option>
                    <option value="">Samarqand</option>
                  </select>
                </div>
                <div className="form-group col-sm-6">
                  <label>Area*</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-8">
                  <label>Street*</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label>Building</label>
                  <input type="text" placeholder="" className="form-control" />
                </div>
                <div className="form-group col-sm-4">
                  <label>House</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label>Postal code</label>
                  <input type="text" placeholder="" className="form-control" />
                </div>
                <div className="form-group col-sm-4">
                  <label>Zip</label>
                  <input type="text" placeholder="" className="form-control" />
                </div>
              </div>
            </form>
          </div>
        </article>
      </div>
    </React.StrictMode>
  );
};
export default CartPage_ContactDeliveryInfo;