import { useSelector } from "react-redux";
import { RootState } from "../store";
import { State } from "../store/wordle/types";

const useWordle = (): State  => {
  const { wordle } = useSelector((state: RootState) => state);
  return wordle;
};


export default useWordle;