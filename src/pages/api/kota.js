// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async (req, res) => {
  const provinceId = req.query.idProvinsi;
  const response = await axios({
    url: `https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`,
    method: "get",
  });
  console.log(response);
  res.status(200).json(response.data);
};
