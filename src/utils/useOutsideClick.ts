import { onBeforeUnmount, onMounted } from 'vue';
import type { Ref } from 'vue'

export const useOutsideClick = (component: Ref<EventTarget | null>, callback: ()=> void) => {
    if (!component) return;
    const listener = (event: MouseEvent) => {
        if (event.target !== component.value && event.composedPath().includes(component.value as EventTarget)) {
            return
        }
        if (typeof callback === 'function') {
            callback()
        }
    }
    onMounted(() => { window.addEventListener('click', listener) })
    onBeforeUnmount(() => { window.removeEventListener('click', listener) })

    return {
        listener
    };
}
  