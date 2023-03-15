import { useState } from "react"


const getConfig = () => {
  return window.appdata.config
};

const queryString = (params) => {
  return Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join("&")
}

const createUrl = (url, queryOptions) => {
  queryOptions = queryOptions || {}
  queryOptions.sesskey = getConfig().sesskey
  return url + "?" + queryString(queryOptions)
}

const useAjax = () => {
  const [data, setData] = useState({
    response: null,
    error: false,
    loading: false,
  })

  const ajax = (options = { method: "GET", body: {}, query: {} }, url = "/app/platform/service.php") => {
    if (options.query || options.body) {
      console.log("Running ajax")
      setData({ response: null, error: null, loading: true })
      fetch(createUrl(url, options.query), {
        method: options.method || "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: options.method !== "GET" && JSON.stringify(options.body),
      })
      .then(async response => {
        const data = await response.json()
        setData({
          response: data,
          error: response.error,
          loading: false,
        })
      })
      .catch(error => {
        setData({
          response: error,
          error: true,
          loading: false,
        })
      })
    }
  }

  return [ data.response, data.error, data.loading, ajax ];
}

export default useAjax;