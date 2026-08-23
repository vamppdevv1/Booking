import axios from "axios";
import { useState, useEffect } from "react";
//main function
export const useFetch = (url) => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //so it runs when component render
  useEffect(() => {
    //the function
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  //refetching func
  const reFetch = async (url) => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  //the data resulted from the initial fetch or refetch
  return { data, loading, error, reFetch };
};
export default useFetch