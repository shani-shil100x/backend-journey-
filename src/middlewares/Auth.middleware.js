import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

//  if the res is not used we should put _ instade of res production gread code progress

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization").replace("Bearer", "");
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );
    //   TODO: Discuss about frontend 
    
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});
