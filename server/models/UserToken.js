const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

//Token za login
const userTokenSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	token: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 30 * 86400, // 30 dana token
	},
});

const UserToken = mongoose.model("UserToken", userTokenSchema);

module.exports = UserToken;