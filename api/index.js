import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : '40.81140395097502',
          tr_latitude: tr_lat ? tr_lat : '41.19923904591783',
          bl_longitude: bl_lng ? bl_lng :'28.59555403926175',
          tr_longitude: tr_lng ? tr_lng : '29.42880493071649',
          limit: '30',
          currency: 'TRY',
          lunit: 'km',
          lang: 'tr'
        },
        headers: {
          'X-RapidAPI-Key': '5ad40c2889msh17236cfdce9c99ap17a220jsn331d3fedc104',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
