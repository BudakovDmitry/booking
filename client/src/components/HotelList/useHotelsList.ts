import { usePage } from 'src/hooks/usePage'
import { useSelector } from "react-redux";
import { HotelType } from 'src/types';

export const useHotelsList = () => {
    const { dispatch } = usePage();
    const allHotels: HotelType[] = useSelector((state: any) => state.hotels)

    return {
        allHotels
    }
}