import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'

function SearchBox({ setData, setLoading }) {
  const [query, setQuery] = useState("")
  const [error, setError] = useState(null)
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    if (!debouncedQuery) {
      setData(null)
      setError(null)
      return
    }
    const abortController = new AbortController()

    async function getWeather() {
      setError(null)
      setLoading(true)

      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API}&q=${debouncedQuery}&aqi=yes`,
          { signal: abortController.signal }
        )

        if (!res.ok) {
          setError({
            message: "Server Error",
            details: `${res.status} ${res.statusText}`,
          })
          return
        }

        const serverData = await res.json()
        setData(serverData)
      } catch (error) {
        if (error.name === "AbortError") return
        setError({ message: "Fetch error", details: error.message })
      } finally {
        setLoading(false)
      }
    }
    getWeather()

    return () => {
      abortController.abort()
    }
  }, [debouncedQuery, setData, setLoading])

  const HandleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="flex flex-col items-center w-full mt-6">
      <input
        type="text"
        value={query}
        onChange={HandleChange}
        placeholder="Search your location..."
        className={`w-80 px-4 py-3 rounded-2xl border font-mono text-center focus:outline-none focus:ring-2 transition-all duration-200  text-yellow-800 text-lg 
        ${
          error
            ? "border-red-400 bg-red-50 focus:ring-red-300"
            : "border-gray-300 bg-fuchsia-100 focus:ring-fuchsia-400"
        }`}
      />

      {error && (
        <div className="mt-3 text-sm text-red-600 text-center bg-red-50 border border-red-200 rounded-lg px-4 py-2 shadow-sm w-80">
          <p className="font-semibold">{error.message}</p>
          {error.details && <p className="text-xs">{error.details}</p>}
        </div>
      )}
    </div>
  )
}

export default SearchBox
