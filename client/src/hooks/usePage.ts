import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { useNavigate } from "react-router-dom";

export const usePage = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const navigate = useNavigate();

  return {
    dispatch,
    navigate
  }
}
