const AWS = require('aws-sdk');

// Configure AWS SDK with your credentials and region
AWS.config.update({
  accessKeyId: 'AKIAZQ6OBW4AC37XRYK4',
  secretAccessKey: 'LKncx651Tx/OpRFb45GfILRy9BrL+nH+hnsRupSs',
  region: 'us-west-2' // Replace with your desired AWS region
});

// Create an S3 client
const s3 = new AWS.S3();

// Function to handle the file upload and save to S3
function uploadFileToS3(file) {
  const bucketName = 'siyabucket-s3';

  const params = {
    Bucket: bucketName,
    Key: file.name,
    Body: file
  };

  s3.putObject(params, (err, data) => {
    if (err) {
      console.log('Error uploading file:', err);
    } else {
      console.log('File uploaded successfully:', data);
    }
  });
}

// Example event listener for the "Save" button
const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', () => {
  // Get the file input element
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  
  // Call the function to upload the file to S3
  uploadFileToS3(file);
});
