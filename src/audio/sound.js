let audioCtx;
export function beep(f = 440, d = 0.08) {
  audioCtx = audioCtx || new AudioContext();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'square';
  osc.frequency.value = f;
  gain.gain.value = 0.035;
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + d);
  osc.stop(audioCtx.currentTime + d);
}
