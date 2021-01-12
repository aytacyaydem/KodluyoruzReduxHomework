import React,{useState,useEffect} from "react"
import axios from "axios"

export function useFetch(url){
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    async function fetchData(){
        setLoading(true)
        const response = await axios.get(url).catch(err => {
            setLoading(false)
            setError(err)
        })
        setData(response.data)
        setLoading(false)
    }
  

    useEffect(() => {
        fetchData()
    },[])

    return {data,error,loading,fetchData}
}