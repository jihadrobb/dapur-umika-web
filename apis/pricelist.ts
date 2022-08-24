import axios from "@/configs/axios";
import { IPricelist } from "interfaces/pricelist";

const pricelistApis = {
  getAll: async (): Promise<IPricelist[]> => {
    const res = await axios.get("/pricelists");
    if (res.status != 200) {
      console.log("Error fetching pricelist");
      return [];
    }
    return res.data.payload;
  },
};

export default pricelistApis;
