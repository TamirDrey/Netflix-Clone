import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;



// import mongoose, { Schema, Document, Model } from "mongoose";

// interface UserAttributes {
//     name: string;
//     email: string;
//     password: string;
// }

// interface UserDocument extends UserAttributes, Document {}

// const userSchema: Schema<UserDocument> = new Schema<UserDocument>(
//     {
//         name: { type: String, required: true },
//         email: { type: String, required: true, unique: true },
//         password: { type: String, required: true },
//     },
//     {
//         timestamps: true,
//     }
// );

// const UserModel: Model<UserDocument> = mongoose.model<UserDocument>("User", userSchema);

// export default UserModel;


