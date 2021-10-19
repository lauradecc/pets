const { Mongoose } = require("mongoose")

module.exports = {

  isValidId: id => Mongoose.Types.ObjectId.isValid(id),

  isBlank: value => value?.length === 0 || !value?.match(/\S/),

}
