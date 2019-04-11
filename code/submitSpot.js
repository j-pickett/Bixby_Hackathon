module.exports.function = function submitSpot (spotName, email, description, isSigningUp) {
  // Simply construct an object from the inputs and return it.
  // This is where your API call to submit a Spot will be (if desired).
  return {
    spotName: spotName,
    email: email,
    description: description,
    isSigningUp: isSigningUp
  };
}
