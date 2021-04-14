export const reserveSeatAction = (seat) => {
  return {
    type: "RESERVE_SEAT",
    seat,
  };
};

export const removeSeatAction = (seatNumber) => {
  return {
    type: "REMOVE_SEAT",
    seatNumber,
  };
};
