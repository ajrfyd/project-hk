import { useSelector } from "react-redux";
import { RootState } from "../../store";

const useMenu = () => {
  const { menu } = useSelector((state: RootState) => state);
  return menu;
};

export default useMenu;