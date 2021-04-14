const stateDefault = {
  selectedSeatList: [],
};

const MovieSeatBooking = (state = stateDefault, action) => {
  switch (action.type) {
    case "RESERVE_SEAT": {
      let selectedSeatUpdate = [...state.selectedSeatList];
      // Find index of the selected seat
      let index = selectedSeatUpdate.findIndex(
        (selectedSeat) => selectedSeat.seatNumber === action.seat.seatNumber
      );

      if (index !== -1) {
        // remove the selected seat if user already selected that seat
        selectedSeatUpdate.splice(index, 1);
      } else {
        selectedSeatUpdate.push(action.seat);
      }

      state.selectedSeatList = selectedSeatUpdate;
      return { ...state };
    }
    case "REMOVE_SEAT": {
      let selectedSeatUpdate = [...state.selectedSeatList];
      // Find index of the seat to be removed
      let index = selectedSeatUpdate.findIndex(
        (removedSeat) => removedSeat.seatNumber === action.seatNumber
      );

      if (index !== -1) {
        selectedSeatUpdate.splice(index, 1);
      }

      state.selectedSeatList = selectedSeatUpdate;

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default MovieSeatBooking;
