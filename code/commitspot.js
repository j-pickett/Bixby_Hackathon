module.exports.function = function commitspot (spotName, category, description) {
  return {
    newspotName: spotName,
    newcategory: category,
    newdescription: description
  };
}
