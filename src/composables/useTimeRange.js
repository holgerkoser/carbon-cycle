import { ref, watch } from 'vue'
import { END_YEAR, START_YEAR } from '@/model/constants.js'

const STORAGE_KEY = 'carbon-cycle:time-range'

function restore() {
  try {
    const [from, to] = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null') ?? []
    if (Number.isInteger(from) && Number.isInteger(to) && START_YEAR <= from && from < to && to <= END_YEAR) {
      return [from, to]
    }
  } catch {
    // Unreadable or unavailable storage: start with the full range
  }
  return [START_YEAR, END_YEAR]
}

// Visible years of all time-axis charts on the dashboard, shared by the range selector and the charts
const timeRange = ref(restore())

watch(timeRange, value => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch {
    // The range then only lives for this session
  }
})

const inRange = year => year >= timeRange.value[0] && year <= timeRange.value[1]

export function useTimeRange() {
  return { timeRange, inRange }
}
