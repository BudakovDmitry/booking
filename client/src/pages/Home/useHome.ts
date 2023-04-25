import { usePage } from 'src/hooks/usePage'
import { useSelector } from "react-redux";
import { RootStateType, FormValuesType, HotelsStateType } from 'src/types'
import { getHotelsRequested } from 'src/redux/actions/hotelsActions';
import { Routes } from 'src/router/routes';
import { useEffect } from 'react'

export const useHome = () => {
    const { dispatch, navigate } = usePage();
    const { hotels, pending, error } = useSelector<RootStateType, HotelsStateType>((state: RootStateType) => state.hotelsReducer)

    const onSubmitForm = async (values: FormValuesType): Promise<void> => {
        dispatch(getHotelsRequested(values.destination))
    }

    useEffect(() => {
        if(hotels && hotels.length) {
            navigate(`${Routes.HOTELS}`)
        }
    }, [hotels])


    return {
        onSubmitForm,
        hotels,
        pending,
        error
    }
}