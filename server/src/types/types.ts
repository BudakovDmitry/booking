export type HotelType = {
  id: number
  name: string
  address: string
  city: string
  state: string | null
  country_code: string
  hotel_rating: number | null
  phone_number: string | null
  website: string | null
};

export type DestinationType = {
  id: number
  value: number
  label: string
};
