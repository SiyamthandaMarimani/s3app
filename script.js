window.addEventListener('DOMContentLoaded', (event) => {
    const fileInput = document.getElementById('fileInput');
    const previewImage = document.getElementById('previewImage');
  
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function (e) {
        previewImage.src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    });
  });