import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { notify } from '../notify';

export const useActions = () => {
  const dispatch = useDispatch();

  const actions = {
    notify,
  }

  return bindActionCreators(actions, dispatch);
}