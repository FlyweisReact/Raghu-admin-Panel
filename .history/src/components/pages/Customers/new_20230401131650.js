import axios from "axios";
const New = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/all"
      );
    } catch (e) {
      console.log(e);
    }
  };

  return fetchData;
};

export default New;
