function cambiarColor() {
    var albums = document.getElementsByClassName("album");
    for (var i = 0; i < albums.length; i++) {
      albums[i].style.backgroundColor = "red";
    }
  }
  
  function cambiarTamano() {
    var images = document.getElementsByClassName("image");
    for (var i = 0; i < images.length; i++) {
      images[i].style.width = "100px";
      images[i].style.height = "auto"; // Maintain aspect ratio
    }
  }
  