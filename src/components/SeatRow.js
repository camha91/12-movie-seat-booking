import React, { Component } from "react";

class SeatRow extends Component {
  renderSeat = () => {
    return this.props.seatRow.seatData.map((seat, index) => {
      let cssReservedSeat = "";
      let disabled = false;
      if (seat.reserved) {
        cssReservedSeat = "reservedSeat";
        disabled = true;
      }

      return (
        <button
          key={index}
          onClick={() => {}}
          disabled={disabled}
          className={`availableSeat ${cssReservedSeat}`}
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

export default SeatRow;
