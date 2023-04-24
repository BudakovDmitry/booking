import { useSelector } from "react-redux";
import { HotelType, RootStateType } from 'src/types'

export const useHotelsList = () => {
    const allHotels: HotelType[] = useSelector((state: RootStateType) => state.hotelsReducer.hotels)

    return {
        allHotels
    }
}