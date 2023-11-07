import { useEffect } from "react"

export const useKeyDown = (keyId, callback) => {
    useEffect(() => {
      const handleKeydown = event => {
        event.key === keyId && callback && callback()
    }
    window.addEventListener("keydown", handleKeydown)
    return () => {
        window.removeEventListener("keydown", handleKeydown)
    }
   }, [])
}