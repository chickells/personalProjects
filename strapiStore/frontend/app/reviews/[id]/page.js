'use client'

// async function getReviews() {
//     const response = await fetch('<! -- REPLACE WITH STRAPI URL -->');
//     return await response.json();

//     // GET DATA FROM STRAPI
// }

import { useParams } from 'next/navigation';
import useFetch from '../../hooks/useFetch'

export default async function CarPage() {
    const { id } = useParams();
    const { data, loading, error } = useFetch('http://localhost:1337/api/cars/' + id);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error.... </p>;
    
    return(
        <div>
            <h1>Reviews { id }</h1>
            <p>The V10 era of Formula One was an era of mechanical marvel. The symphony of high-revving engines echoing through the tracks was breathtaking. The raw power, precision engineering, and mind-boggling horsepower of these engines created an unforgettable racing experience. The relentless acceleration, ear-piercing sound, and lightning-fast gear changes left spectators and drivers in awe.
            In this era, Formula One cars were poetry in motion. The aerodynamics and technical advancements pushed the boundaries. The V10 engines unleashed their fury, propelling these machines to blistering speeds. The noise and exhaust from these engines added to the excitement and made every race a spectacle. The pursuit of mechanical perfection reached its zenith, leaving a legendary legacy for the V10 era of Formula One.</p>
            {/* <p>Data = {data.data.attributes.body}</p> */}
            </div>
    )
}