import { divIcon } from 'leaflet'

export const mapLocationIcon = divIcon({
  html: `
    <span class="relative flex h-5 w-5">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52A8FF]"></span>
        <span class="relative inline-flex rounded-full h-5 w-5 bg-[#3E5CFF] border-2 border-white"></span>
    </span>`,
})
