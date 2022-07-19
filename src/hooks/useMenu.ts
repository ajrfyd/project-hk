import { useSelector } from "react-redux";
import { RootState } from "../store";
import { StateType } from "../store/menu";

const useMenu = () => {
  const { menu } = useSelector((state: RootState) => state);
  return menu;
};

export default useMenu;