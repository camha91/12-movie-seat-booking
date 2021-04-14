import React, { Component } from "react";
import { connect } from "react-redux";
import { removeSeatAction } from "../redux/actions/MovieSeatBookingActions";

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

        <div className="mt-5 mr-5">
          <table className="table text-center" border="5">
            <thead>
              <tr className="text-light" style={{ fontSize: 20 }}>
                <th>Seat Number</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-primary">
              {this.props.selectedSeatList.map((selectedSeat, index) => {
                return (
                  <tr key={index}>
                    <td>{selectedSeat.seatNumber}</td>
                    <td>${selectedSeat.price.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.removeSeat(selectedSeat.seatNumber);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>SubTotal</td>
                <td>
                  $
                  {this.props.selectedSeatList
                    .reduce((subtotal, selectedSeat, index) => {
                      return (subtotal += selectedSeat.price);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSeatList: state.MovieSeatBooking.selectedSeatList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeSeat: (seatNumber) => {
      return dispatch(removeSeatAction(seatNumber));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatBookingInfo);
