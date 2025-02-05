import { useEffect } from "react";
import { useListBusinessQuery } from "../../services/businessApi";

const BusinessPage = () => {
  const bussinessesResponse = useListBusinessQuery();

  useEffect(() => {
    console.log(bussinessesResponse.data);
  }, [bussinessesResponse.data]);
  return <div>BusinessPage</div>;
};

export default BusinessPage;
