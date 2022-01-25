import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/state";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch); // возвращет все actionCreators, которые мы передали в объекте { searchRepositories: dispatch(searchRepositories) }
}