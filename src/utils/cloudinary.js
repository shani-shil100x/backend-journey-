import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from 'dotenv';
dotenv.config(); // This line reads your .env file and loads the variables into process.env

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null; // Return null if no file path provided

    // Upload file to Cloudinary, auto-detect resource type (image/video)
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("file is uploaded on cloudinary", response.url); // Log upload success
    return response; // Return Cloudinary response object

  } catch (error) {
    fs.unlinkSync(localFilePath); // Delete local file if upload fails
    return null; // Return null on failure
  }
};

export { uploadOnCloudinary };
