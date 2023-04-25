import { usePage } from 'src/hooks/usePage'
import { useSelector } from "react-redux";
import { RootStateType, FormValuesType } from 'src/types'
import { getHotelsRequested } from 'src/redux/actions/hotelsActions';
import { Routes } from 'src/router/routes';
import { useEffect } from 'react'

export const useHome = () => {
    const { dispatch, navigate } = usePage();
    const { hotels, pending, error } = useSelector((state: RootStateType) => state.hotelsReducer)

    console.log('pending', pending)
    console.log('error', error)
    console.log('allHotels', hotels)

    const onSubmitForm = async (values: FormValuesType): Promise<void> => {
        dispatch(getHotelsRequested(values.destination))
    }

    useEffect(() => {
        if(hotels.length) {
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