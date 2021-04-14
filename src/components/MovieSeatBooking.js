import React, { Component } from "react";
import "../assets/MovieSeatBooking.css";
import SeatBookingInfo from "./SeatBookingInfo";
import SeatRow from "./SeatRow";

class MovieSeatBooking extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-cover">
          <div className="row mt-2">
            <div className="col-8 text-center">
              <div className="text-primary display-4">
                Online Movie Seat Booking
              </div>
              <div className="mt-3 text-light" style={{ fontSize: "25px" }}>
                Screen
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
                className="mt-2"
              >
                <div className="screen"></div>
                <SeatRow />
              </div>
            </div>
            <div className="col-4">
              <div className="text-success" style={{ fontSize: "25px" }}>
                YOUR RESERVED SEAT LIST
              </div>
              <SeatBookingInfo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieSeatBooking;
