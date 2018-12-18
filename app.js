
      var scannerTrigger = document.querySelector("#scanner--trigger")
      
      let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
  
      Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
          scanner.start(cameras[1]);
        } else {
          console.error('No cameras found.');
        }
      }).catch(function (e) {
        console.error(e);
      });
   
// Take a picture when cameraTrigger is tapped
scannerTrigger.onclick = function() {
  let result = scanner.scan();
  document.getElementById("content").innerHTML = result.content;
};
// Start the video stream when the window loads
//window.addEventListener("load", cameraStart, false);