import { useEffect, useRef } from "react"

export const useOutClick = callback => {
    const ref = useRef(null)
    useEffect(() => {
      const handleOutclick = event => {
        !ref.current?.contains(event.target) && callback && callback()
     }
     window.addEventListener("mousedown", handleOutclick)
     return () => {
         window.removeEventListener("mousedown", handleOutclick)
     }
    }, [])
    return ref
}