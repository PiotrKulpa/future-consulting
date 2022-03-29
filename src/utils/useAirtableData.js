import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { URL } from "../const/config";

const useAirtableData = (tableName, reducerName, reduxData) => {
  const config = {
    method: "get",
    url: `${URL}${tableName}`,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxData.length === 0) {
      dispatch({ type: "UPDATE_LOADER", payload: true });
      const fetchData = async () => {
        const response = await axios(config);
        const { data: { records = [] } = {} } = response || {};
        dispatch({ type: reducerName, payload: records });
        dispatch({ type: "UPDATE_LOADER", payload: false });
      };

      try {
        fetchData();
      } catch (err) {
        console.log(err);
        dispatch({ type: "UPDATE_LOADER", payload: false });
      }
    }
  });
};

export default useAirtableData;
