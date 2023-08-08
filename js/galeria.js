let texto ="Hola. Estás en la sección de Galería."
const hablar = (texto)=> speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

hablar(texto)