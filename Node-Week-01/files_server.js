const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  console.log("File content:", data);
});

// const contentToWrite = "Hello, File System!";

// fs.writeFile("output.txt", contentToWrite, "utf8", (err) => {
//   if (err) {
//     console.error(
//       "Error writing to the file:",

//       err,
//     );

//     return;
//   }

//   console.log("Write operation complete.");
// });

// fs.mkdir("new_directory", (err) => {
//   if (err) {
//     console.error(
//       "Error creating directory:",

//       err,
//     );

//     return;
//   }

//   console.log("Directory created successfully.");
// });

// fs.readdir("some_directory", (err, files) => {
//   if (err) {
//     console.error(
//       "Error reading directory:",

//       err,
//     );

//     return;
//   }

//   console.log("Files in the directory:", files);
// });

// fs.unlink("file_to_delete.txt", (err) => {
//   if (err) {
//     console.error(
//       "Error deleting file:",

//       err,
//     );

//     return;
//   }

//   console.log("File deleted successfully.");
// });

// const directoryPath =
//   "D:/Semester 04 Subjects/24PWBCS1226_WT_SP_26/Node-Week-01/waqas.txt";

// // Use fs.rmdir to delete the directory
// fs.rmdir(directoryPath, { recursive: true }, (err) => {
//   if (err) {
//     console.error(
//       "Error deleting directory:",

//       err,
//     );
//   } else {
//     console.log("Directory deleted successfully.");
//   }
// });