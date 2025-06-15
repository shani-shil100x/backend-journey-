import mongoose, { model, Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subcriber: {
      type: Schema.Types.ObjectId, // one who is subcribing the channel
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, // the "subcriber" who is subcribing the channel
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
