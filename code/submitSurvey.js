module.exports.function = function submitSurvey (spotName, email, comments, isSigningUp) {
  // Simply construct an object from the inputs and return it.
  // This is where your API call to submit a survey will be (if desired).
  return {
    spotName: spotName,
    email: email,
    comments: comments,
    isSigningUp: isSigningUp
  };
}
