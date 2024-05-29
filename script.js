let avance = 0;
let punteo = 0;
let player, player2, player3, player4, player5, player6, acierto, mal;
//variables para confeti
const canvas = document.getElementById("fallingLeavesCanvas");
const ctx = canvas.getContext("2d");
const leaves = [];
const numLeaves = 100;
const modal = document.getElementById("modalxd");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


/*createLeaves();
  animate();*/

//funciones confeti
function createLeaf() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * 18 + 2,
    size: Math.random() * 22 + 3, // Random size between 3 and 25
    speed: Math.random() * 3 + 1, // Random speed between 1 and 4
    color: `rgba(${Math.random() * 200 + 50}, ${Math.random() * 200 + 50}, ${Math.random() * 200 + 50}, ${Math.random() * 0.8 + 0.2})`, // Random color
    //color: `rgba(255, ${Math.random() * 100 + 100}, 0, ${Math.random() * 0.8 + 0.2})`, // Random orange-ish color
    //color: '#000A',
    rotation: Math.random() * 360 // Random initial rotation
  };
}

function createLeaves() {
  for (let i = 0; i < numLeaves; i++) {
    leaves.push(createLeaf());
  }
}

function updateLeaves() {
  for (let i = 0; i < leaves.length; i++) {
    const leaf = leaves[i];
    leaf.y += leaf.speed;
    leaf.x += 1.0 * Math.sin(leaf.y / leaf.size);

    if (leaf.y > canvas.height) {
      // Reset the leaf when it goes below the canvas
      leaf.y = -20;
      leaf.x = Math.random() * canvas.width;
    }
  }
}

function drawLeaves() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < leaves.length; i++) {
    const leaf = leaves[i];
    ctx.save();
    ctx.translate(leaf.x + leaf.size / 2, leaf.y + leaf.size / 2);
    ctx.rotate((leaf.rotation * Math.PI) / 180);
    ctx.fillStyle = leaf.color;
    ctx.fillRect(-leaf.size / 2, -leaf.size / 2, leaf.size, leaf.size);
    ctx.restore();
  }
}

function animate() {
  updateLeaves();
  drawLeaves();
  requestAnimationFrame(animate);
}

function onWindowResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

//para los comentarios pagina principal  
function toggleDivs() {
  const div1 = document.getElementById('opin1');
  const div2 = document.getElementById('opin2');

  div1.style.display = "none"
  div2.style.display = "block"
}
function toggleDivs2() {
  const div1 = document.getElementById('opin1');
  const div2 = document.getElementById('opin2');

  div1.style.display = "block"
  div2.style.display = "none"
}

//funcion de pausar video en pagina acvitidades ww1 (encargate de los demas videos xd)
function pausarVideo() {
  player.pauseVideo();
}
function pausarVideo2() {
  player2.pauseVideo();
}
function pausarVideo3() {
  player3.pauseVideo();
}
function pausarVideo4() {
  player4.pauseVideo();
}
function borrar() {
  localStorage.removeItem("av_ww1");
  localStorage.removeItem("punteoquiz");
  location.reload();
}
//funcion para indicar q se acabo la actividad
function mostrarAlerta() {
  document.getElementById('player').style.display = "none";
  document.getElementById("continuar1").style.display = "block";
  document.getElementById("msj1").style.display = "block";
}
function mostrarAlerta2() {
  document.getElementById('player2').style.display = "none";
  document.getElementById("continuar2").style.display = "block";
  document.getElementById("msj2").style.display = "block";
}
function mostrarAlerta3() {
  document.getElementById('player3').style.display = "none";
  document.getElementById("continuar3").style.display = "block";
  document.getElementById("msj3").style.display = "block";
}
function mostrarAlerta4() {
  document.getElementById('player4').style.display = "none";
  document.getElementById("continuar4").style.display = "block";
  document.getElementById("msj4").style.display = "block";
}
function mostrarAlerta5() {
  document.getElementById('pregunta5').style.display = "none";
  document.getElementById("continuar5").style.display = "block";
  document.getElementById("msj5").style.display = "block";
}
//Funcion para videos yutu
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'GXD0ySQFxRQ',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  player2 = new YT.Player('player2', {
    height: '315',
    width: '560',
    videoId: 'GXD0ySQFxRQ',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange2
    }
  });
  player3 = new YT.Player('player3', {
    height: '315',
    width: '560',
    videoId: 'GXD0ySQFxRQ',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange3
    }
  });
  player4 = new YT.Player('player4', {
    height: '315',
    width: '560',
    videoId: 'GXD0ySQFxRQ',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange4
    }
  });
  player5 = new YT.Player('player5', {
    height: '0',
    width: '0',
    videoId: 'C2fOv5GKJNs',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange5
    }
  });
  player6 = new YT.Player('player6', {
    height: '0',
    width: '0',
    videoId: '_jc1BHQQJLc',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange6
    }
  });
  acierto = new YT.Player('bueno', {
    height: '0',
    width: '0',
    videoId: 'GYefSfSrqyI',
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  var checkbox = document.getElementById('audioControl');
  if (checkbox.checked) {
    event.target.playVideo();
  }
}

// Función para manejar los cambios de estado del reproductor
function onPlayerStateChange5(event) {
  if (event.data == YT.PlayerState.ENDED) {
    player5.playVideo();  // Reiniciar la reproducción cuando termine
  }
}
function onPlayerStateChange6(event) {
  if (event.data == YT.PlayerState.ENDED) {
    player6.playVideo();  // Reiniciar la reproducción cuando termine
  }
}
function playmusicquiz() {
  player6.playVideo();
  var image = document.getElementById('dogi2');
  image.src = 'dog-piano-playing.gif';
}

// Función para reproducir o pausar el video según el estado del checkbox
function toggleAudio() {
  var checkbox = document.getElementById('audioControl');
  var image = document.getElementById('dogi');
  if (checkbox.checked) {
    player5.playVideo();
    image.src = 'dog-piano-playing.gif';
  } else {
    player5.pauseVideo();
    image.src = 'dog-piano.png';
  }
}
function toggleAudio2() {
  var checkbox = document.getElementById('audioControl2');
  var image = document.getElementById('dogi2');
  if (checkbox.checked) {
    player6.playVideo();
    image.src = 'dog-piano-playing.gif';
  } else {
    player6.pauseVideo();
    image.src = 'dog-piano.png';
  }
}

function onPlayerReady(event) {
  // El reproductor está listo
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    mostrarAlerta();
    document.exitFullscreen();
  }
}
function onPlayerStateChange2(event) {
  if (event.data == YT.PlayerState.ENDED) {
    mostrarAlerta2();
    document.exitFullscreen();
  }
}
function onPlayerStateChange3(event) {
  if (event.data == YT.PlayerState.ENDED) {
    mostrarAlerta3();
    document.exitFullscreen();
  }
}
function onPlayerStateChange4(event) {
  if (event.data == YT.PlayerState.ENDED) {
    mostrarAlerta4();
    document.exitFullscreen();
  }
}



//Funcion para actulizar el marcador
function seguir1() {
  avance = 1;
  localStorage.setItem("av_ww1", avance.toString());
  console.log(avance);
  location.reload();
}
function seguir2() {
  avance = 2;
  localStorage.setItem("av_ww1", avance.toString());
  console.log(avance);
  location.reload();
}
function seguir3() {
  avance = 3;
  localStorage.setItem("av_ww1", avance.toString());
  console.log(avance);
  location.reload();
}
function seguir4() {
  avance = 4;
  localStorage.setItem("av_ww1", avance.toString());
  console.log(avance);
  location.reload();
}
function seguir5() {
  avance = 5;
  localStorage.setItem("av_ww1", avance.toString());
  console.log(avance);
  // Recuperar el valor de localStorage
  let objeto2 = localStorage.getItem("punteoquiz");
  if (objeto2) {
    // Convertir el valor recuperado a número
    punteo = parseInt(objeto2);
    // Mostrar el valor en el elemento h1
    document.getElementById("finalpuntaje").innerText = "Puntaje: " + punteo;
  } else {
    // En caso de que no haya ningún valor almacenado
    document.getElementById("finalpuntaje").innerText = "No se encontró ningún puntaje.";
  }
  location.reload();
}

//verificar progreso pagina ww1
function verificarww1() {
  let objeto = localStorage.getItem("av_ww1");
  if (objeto) {
    avance = parseInt(objeto);
    if (avance >= 1) {
      console.log("Actividad 1 completada");
      document.getElementById('btn1').disabled = true;
      document.getElementById('btn2').disabled = false;
    }

    if (avance >= 2) {
      console.log("Actividad 2 completada");
      document.getElementById('btn3').disabled = false;
      document.getElementById('btn2').disabled = true;
    }

    if (avance >= 3) {
      console.log("Actividad 3 completada");
      document.getElementById('btn4').disabled = false;
      document.getElementById('btn3').disabled = true;
    }

    if (avance >= 4) {
      console.log("Actividad 4 completada");
      document.getElementById('btn5').disabled = false;
      document.getElementById('btn4').disabled = true;
    }

    if (avance >= 5) {
      console.log("Actividad 5 completada");
      document.getElementById('btn5').disabled = true;
      document.getElementById('botones').style.display = "none";
      document.getElementById("gameover").style.display = "block";
      document.getElementById("dogi").style.display = 'block';
      document.getElementById("checkdog").style.display = 'block';
      createLeaves();
      animate();
      player6.pauseVideo();
      player5.playVideo();
      var image = document.getElementById('dogi');
      image.src = 'dog-piano-playing.gif';
      let objeto2 = localStorage.getItem("punteoquiz");
      if (objeto2) {
        // Convertir el valor recuperado a número
        punteo = parseInt(objeto2);
        // Mostrar el valor en el elemento h1
        document.getElementById("finalpuntaje").innerText = punteo + " Puntos";
      } else {
        // En caso de que no haya ningún valor almacenado
        document.getElementById("finalpuntaje").innerText = "No se encontró ningún puntaje.";
      }


    }
  }
}

//verificar quizz sociales
function responder1() {
  //pregunta 1
  if (document.getElementById("correcta1").checked) {
    punteo++;
    acierto.playVideo();
    alert("respuesta correcta :D");
    document.getElementById("pregunta1").style.display = 'none';
    document.getElementById("pregunta2").style.display = 'block'; 
  }
  else {
    alert("respuesta Incocrrecta :C");
    document.getElementById("pregunta1").style.display = 'none';
    document.getElementById("pregunta2").style.display = 'block';
  }
  console.log(punteo);
}
function responder2() {

  //pregunta 2
  if (document.getElementById("correcta2").checked) {
    punteo++;
    acierto.playVideo();
    alert("respuesta correcta :D");
    document.getElementById("pregunta2").style.display = 'none';
    document.getElementById("pregunta3").style.display = 'block';
  }
  else {
    alert("respuesta Incocrrecta :C");
    document.getElementById("pregunta2").style.display = 'none';
    document.getElementById("pregunta3").style.display = 'block';
  }
  console.log(punteo);
}
function responder3() {

  //pregunta 3
  if (document.getElementById("correcta3").checked) {
    punteo++;
    acierto.playVideo();
    alert("respuesta correcta :D");
    document.getElementById("pregunta3").style.display = 'none';
    document.getElementById("pregunta4").style.display = 'block';
  }
  else {
    alert("respuesta Incocrrecta :C");
    document.getElementById("pregunta3").style.display = 'none';
    document.getElementById("pregunta4").style.display = 'block';
  }
  console.log(punteo);
}
function responder4() {

  //pregunta 4
  if (document.getElementById("correcta4").checked) {
    punteo++;
    acierto.playVideo();
    alert("respuesta correcta :D");
    document.getElementById("pregunta4").style.display = 'none';
    document.getElementById("pregunta5").style.display = 'block';
  }
  else {
    alert("respuesta Incocrrecta :C");
    document.getElementById("pregunta4").style.display = 'none';
    document.getElementById("pregunta5").style.display = 'block';
  }
  console.log(punteo);
}
function responder5() {

  //pregunta 5
  if (document.getElementById("correcta5").checked) {
    punteo++;
    acierto.playVideo();
    alert("respuesta correcta :D");
    document.getElementById("pregunta5").style.display = 'none';
    localStorage.setItem("punteoquiz", punteo.toString());
    mostrarAlerta5();
  }
  else {
    alert("respuesta Incocrrecta :C");
    document.getElementById("pregunta5").style.display = 'none';
    localStorage.setItem("punteoquiz", punteo.toString());
    mostrarAlerta5();
  }
  console.log(punteo);
}

