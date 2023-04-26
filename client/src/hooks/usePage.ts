import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { useNavigate, useParams } from 'react-router-dom';

export const usePage = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const navigate = useNavigate();
  const params = useParams();

  return {
    dispatch,
    navigate,
    params,
  };
};
