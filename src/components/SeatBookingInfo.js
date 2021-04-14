import React, { Component } from "react";

class SeatBookingInfo extends Component {
  render() {
    return (
      <div>
        <div className="mt-3">
          <button className="reservedSeat"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Reserved Seat
          </span>
          <br />
          <button className="selectedSeat"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Selected Seat
          </span>
          <br />
          <button className="availableSeat" style={{ marginLeft: 0 }}></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Available Seat
          </span>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light">
                <th>Seat Number</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-light">
                <th>Seat Number</th>
                <th>Price</th>
                <th></th>
              </tr>
              <tr className="text-light">
                <th>Seat Number</th>
                <th>Price</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SeatBookingInfo;
