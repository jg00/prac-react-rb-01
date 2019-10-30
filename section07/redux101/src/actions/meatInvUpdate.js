// Action creator
export default (operation, index) => {
  console.log("Updating meat inventory!!!");
  return {
    type: "updateMeat",
    payload: { operation, index }
  };
};
