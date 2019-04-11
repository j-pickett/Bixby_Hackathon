module.exports.function = function CommitSpot (spotName, category, description, isSigningUp) {
  // Simply construct an object from the inputs and return it.
  // This is where your API call to submit a Spot will be (if desired).
  return {
    spotName: spotName,
    category: category,
    description: description,
  };
}
