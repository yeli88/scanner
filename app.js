   

  let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
  scanner.addListener('scan', function (content) {
    var data = content.split(":");

    var name = data[4].slice(0, -3);
    var id = data [9].slice(0,-7);
    var timestamp = new Date();

    document.getElementById("name").innerHTML = "Name: " + name;
    document.getElementById("id").innerHTML = "Id: " + id;
    document.getElementById("timestamp").innerHTML = "Timestamp: " + timestamp;
  });
  
  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
      scanner.start(cameras[1]);
    } else {
      console.error('No cameras found.');
    }
  }).catch(function (e) {
    console.error(e);
  });

  function scan(){
  let result = scanner.scan();
  //document.getElementById("content").innerHTML = result.content;
  document.getElementById("content").innerHTML = "Success";
};
// Start the video stream when the window loads
//window.addEventListener("load", cameraStart, false);