import { useSelector } from "react-redux";
import { RootState } from "../store";

const useWordle = () => {
  const { wordle } = useSelector((state: RootState) => state);
  return wordle;
};


export default useWordle;