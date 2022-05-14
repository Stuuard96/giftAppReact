import { useEffect, useState } from "react";
import { getFetchGifts } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getFetchGifts(categoria).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [categoria]);

  return state; // {data:[], loading:true}
};
