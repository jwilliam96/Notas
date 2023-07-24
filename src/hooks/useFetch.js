import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl, setClouseForm) => {
  const [infoApi, setInfoApi] = useState();

  // GET
  const getApi = (path) => {
    const url = `${baseUrl}${path}/`;
    axios
      .get(url)
      .then((res) => setInfoApi(res.data))
      .catch((err) => console.log(err));

    /*
      fetch(url)
      .then(res => res.json())
      .then(data => setInfoApi(data))
      .catch((err) => console.log(err));
      */
  };

  // POST
  const postApi = (path, data) => {
    const url = `${baseUrl}${path}/`;
    axios
      .post(url, data)
      .then((res) => {
        setInfoApi([...infoApi, res.data]);
        setClouseForm(true);
      })
      .catch((err) => console.log(err));
  };

  // DELETE
  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
        const infoApiFiltered = infoApi.filter((elem) => elem.id !== id);
        setInfoApi(infoApiFiltered);
      })
      .catch((err) => console.log(err));
  };

  // UPDATE - put ó patch
  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios
      .patch(url, data)
      .then((res) => {
        console.log(res.data);
        const infoApiMapped = infoApi.map((elem) =>
          elem.id === id ? res.data : elem
        );
        setInfoApi(infoApiMapped);
        setClouseForm(true);
      })
      .catch((err) => console.log(err));
  };

  return [infoApi, getApi, postApi, deleteApi, updateApi];
};

export default useFetch;
