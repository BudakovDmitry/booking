import { HotelType } from 'src/types';
import { usePage } from 'src/hooks/usePage'
import { setHotels } from 'src/redux/actions/hotelsActions'

export const useHotels = () => {
    const { dispatch } = usePage();
    
    const clearHotels = (): void => {
        dispatch(setHotels([] as HotelType[]))
    }
    
    return {
        clearHotels
    }
}