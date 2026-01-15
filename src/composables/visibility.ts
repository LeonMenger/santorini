import { ref, onMounted, onUnmounted } from 'vue';

export const useVisibility = (
    elementRef: any,
    threshold: number = 0.25,
    checkOnce: boolean = true
) => {
    const isVisible = ref(false);
    let observer: IntersectionObserver | null = null;

    const disconnect = () => {
        if (observer && elementRef.value) {
            observer.unobserve(elementRef.value);
            observer.disconnect();
        }
    };

    onMounted(() => {
        observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry) return;
                isVisible.value = entry.isIntersecting;

                if (checkOnce && isVisible.value) {
                    disconnect();
                }
            },
            { threshold: threshold }
        );

        if (elementRef.value) {
            observer.observe(elementRef.value);
        }
    });

    onUnmounted(() => {
        disconnect();
    });

    return { isVisible };
};
