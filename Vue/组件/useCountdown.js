import { onBeforeUnmount, onMounted, onUpdated, ref } from 'vue';

export const useCountdown = (endTime) => {
  const remainingTime = ref(getRemainingTime());

  function getRemainingTime() {
    const endTimeValue = new Date(endTime).getTime()
    const now = new Date().getTime()
    const seconds = Math.floor((endTimeValue - now) / 1000)
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    const hms = hours.toString().padStart(2, '0') + ':' +
      minutes.toString().padStart(2, '0') + ':' +
      remainingSeconds.toString().padStart(2, '0');
    return hms
  }

  const countdownInterval = setInterval(() => {
    remainingTime.value = getRemainingTime();
    if (remainingTime.value == 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);

  onUpdated(() => {
    clearInterval(countdownInterval);
    remainingTime.value = getRemainingTime();
  });

  return remainingTime;
}
