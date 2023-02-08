import { onBeforeMount, onBeforeUnmount, reactive } from 'vue'
import type { tState } from '@/components/Accordion/types'

const accordionsStates = reactive<tState>({})
export function useAccordionState(id?: string, options?: {flush: boolean, alwaysOpen: boolean, defaultOpen: boolean}): {
  accordionsStates: tState
} {

  onBeforeMount(() => {
    if (!id) return
    accordionsStates[id] = {
      id: id,
      flush: options?.flush ?? false,
      alwaysOpen: options?.alwaysOpen ?? false,
      defaultOpen: options?.defaultOpen ?? true,
      panels: {},
    }
  })
  onBeforeUnmount(() => {
    if (!id) return
    delete accordionsStates[id]
  })

  return {
    accordionsStates,
  }
}


