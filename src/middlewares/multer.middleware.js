// Configure disk storage for multer
const storage = multer.diskStorage({
  // Define destination folder for uploaded files
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); // Files will be stored in public/temp
  },
  // Define the filename to use for the uploaded file
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original filename
  },
});

// Create and export multer instance with the defined storage config
export const upload = multer({
  storage, // shorthand for storage: storage
});
