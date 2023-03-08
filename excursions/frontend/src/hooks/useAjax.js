import { useState } from "react"


const getConfig = () => {
  return window.appdata.config
};

const queryString = params =>
  Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join("&")

const createUrl = (url, queryOptions) => {
  queryOptions.sesskey = getConfig().sesskey
  return url + "?" + queryString(queryOptions)
}


const useAjax = () => {
  const [data, setData] = useState({
    response: null,
    error: false,
    loading: false,
  })

  const ajax = (url = "", options = { method: "GET", body: {}, query: {} }) => {
    if (url) {
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
          error: !response.ok,
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