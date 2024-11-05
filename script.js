// Get the file input and message elements
const fileInput = document.getElementById("fileInput");
const message = document.getElementById("message");

// Add an event listener for file selection
fileInput.addEventListener("change", function () {
  // Get the selected file
  const file = fileInput.files[0];

  // Check if a file was selected
  if (file) {
    // Get the file extension
    const fileExtension = file.name.split(".").pop().toLowerCase();

    // Check if the file extension is .mp3 or .wav
    if (fileExtension === "mp3" || fileExtension === "wav") {
      // Display success message
      message.textContent = "File uploaded successfully!";
      message.style.color = "green";
    } else {
      // Display error message for unsupported file types
      message.textContent =
        "Unsupported file format. Please upload an MP3 or WAV file.";
      message.style.color = "red";
    }
  }
});
