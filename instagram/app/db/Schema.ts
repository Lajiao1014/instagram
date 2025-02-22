import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

    createdAt: { type: Date, default: Date.now }
});

const postSchema = new Schema({
    id: Number,
    image: String,
    n_likes: Number,
    n_comment: Number,
});

// const Post = mongoose.model("Post", postSchema);
const User = mongoose.models.User || mongoose.model("User", userSchema);

// export { Post };
export default User;
