import React, { Component } from "react";
import { connect } from "react-redux";
import { reserveSeatAction } from "../redux/actions/MovieSeatBookingActions";

class SeatRow extends Component {
  renderSeat = () => {
    return this.props.seatRow.seatData.map((seat, index) => {
      let cssReservedSeat = "";
      let disabled = false;

      // Seat already reserved
      if (seat.reserved) {
        cssReservedSeat = "reservedSeat";
        disabled = true;
      }

      // Seat is selected to reserve
      let cssSelectedSeat = "";
      // Find the seat number of selected Seat
      let indexSelectedSeat = this.props.selectedSeatList.findIndex(
        (selectedSeat) => selectedSeat.seatNumber === seat.seatNumber
      );

      if (indexSelectedSeat !== -1) {
        cssSelectedSeat = "selectedSeat";
      }

      return (
        <button
          key={index}
          onClick={() => {
            this.props.reserveSeat(seat);
          }}
          disabled={disabled}
          className={`availableSeat ${cssReservedSeat} ${cssSelectedSeat}`}
        >
          {seat.seatNumber}
        </button>
      );
    });
  };

  renderFirstRow = () => {
    return this.props.seatRow.seatData.map((seat, index) => {
      return (
        <button className="colNumber" key={index}>
          {seat.seatNumber}
        </button>
      );
    });
  };

  renderRow = () => {
    if (this.props.rowNumber === 0) {
      return (
        <div className="ml-4">
          {this.props.seatRow.row} {this.renderFirstRow()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.seatRow.row} {this.renderSeat()}
        </div>
      );
    }
  };

  render() {
    return (
      <div
        style={{ fontSize: "20px" }}
        className="text-light text-left ml-5 mt-3"
      >
        {this.renderRow()}
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
    reserveSeat: (seat) => {
      dispatch(reserveSeatAction(seat));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatRow);
