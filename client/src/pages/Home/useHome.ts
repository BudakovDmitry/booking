import { usePage } from 'src/hooks/usePage'
import { useEffect } from 'react'
import { useSelector } from "react-redux";
import { HotelType, RootStateType, FormValuesType } from 'src/types'
import { fetchHotels } from 'src/redux/actions/hotelsActions';
import { Routes } from 'src/router/routes';

export const useHome = () => {
    const { dispatch, navigate } = usePage();
    const allHotels: HotelType[] = useSelector((state: RootStateType) => state.hotelsReducer.hotels)

    console.log('allHotels', allHotels)

    const onSubmitForm = async (values: FormValuesType) => {
        dispatch(fetchHotels())
        console.log(values)
        console.log(JSON.stringify(values))
    }


    return {
        onSubmitForm
    }
}