// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async (req, res) => {
  const response = await axios({
    url: "https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json",
    method: "get",
  });
  console.log(response);
  res.status(200).json(response.data);
};
