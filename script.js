  // Wait for the document to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Reference the button
    const button = document.getElementById("downloadButton");

    // Add click event listener to the button
    button.addEventListener("click", function () {
      // Load jsPDF from the UMD module
      const { jsPDF } = window.jspdf;

      // Create a new instance of jsPDF
      const doc = new jsPDF();

      // Add content to the PDF
      doc.text("Hello, World!", 10, 10); // Add text at coordinates (10, 10)

      // Save the generated PDF
      doc.save("raghul_ravi_CV.pdf");
    });
  });