export function useScrollPosition() {
    const scrollX = ref(0);
    const scrollY = ref(0);

    const updateScroll = () => {
        scrollX.value = window.scrollX;
        scrollY.value = window.scrollY;
    };

    onMounted(() => {
        updateScroll();
        window.addEventListener('scroll', updateScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', updateScroll);
    });

    return {
        scrollX,
        scrollY,
    };
}