

function registroApp(){
    window.open(URL,"registro.html","width=120,height=300,scrollbars=NO")
}
function cambiarTrack(track) {
    var path =  track.getAttribute("path")
    viejo_audio = document.getElementById("reproductor")
    audio_padre = viejo_audio.parentNode
    audio_padre.removeChild(viejo_audio)
    nuevo_audio = document.createElement("audio")
    nuevo_audio.setAttribute("id","reproductor")
    nuevo_audio.setAttribute("controls", "controls")
   // nuevo_audio.setAttribute("autoplay", "autoplay")
    source = document.createElement("source")
    source.setAttribute("src", path)
    source.setAttribute("type", "audio/aac")
    source.setAttribute("id", "reproductorSource")
    nuevo_audio.appendChild(source)
    audio_padre.appendChild(nuevo_audio).volume=0.12}
function cargarReproductor() {
          var select = document.getElementById("selectTrack")
          var path = select.options[0].getAttribute("path")
    nuevo_audio = document.createElement("audio")
    nuevo_audio.setAttribute("id","reproductor")
    nuevo_audio.setAttribute("controls", "controls")       
    source = document.createElement("source")
    source.setAttribute("src", path)
    source.setAttribute("type", "audio/aac")
    source.setAttribute("id", "reproductorSource")
    nuevo_audio.appendChild(source)
    padre = document.getElementById("reproductorBox")
    padre.appendChild(nuevo_audio)
 }
 