import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { notify } from '../notify';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(notify, dispatch);
}