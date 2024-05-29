let isSpeaking = false;

function speakText(text) {
    if (isSpeaking) return; // Si ya se está hablando, no hacer nada

    isSpeaking = true; // Bloquear la capacidad de hablar temporalmente
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = window.speechSynthesis.getVoices().find(voice => voice.lang === 'en-US' && voice.name.includes('Google'));
    if (voice) {
        utterance.voice = voice;
    }
    window.speechSynthesis.speak(utterance);

    // Desbloquear después de 1 segundo
    setTimeout(() => {
        isSpeaking = false;
    }, 800);
}
