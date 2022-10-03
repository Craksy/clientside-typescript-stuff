import { useEffect, useState } from "react";
import { City, GetCity } from "../services/CityApi";

const CityDetailsView = ({cityId}: number|any ) => {

    const [city, setCity] = useState<City | null>()

    useEffect(() => {
        GetCity(cityId).then(setCity)
    }, [cityId])

    if(city == null){
        return <h1>Select a city from the list to get more details</h1>
    }

    return (
        <div className="box">
            <div className="level">
                <div className="level-item">
                    <h1 className="is-size-1">{city.name}</h1>
                </div>
            </div> 
            <div className="level">
                <div className="level-item level-left">

                    <div className="columns">
                        <div className="column">
                            <label className="label">ID</label>
                        </div>
                        <div className="column">
                            <span>{city.cityId}</span>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column">
                            <label className="label">Description</label>
                        </div>
                        <div className="column">
                            <span>{city.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityDetailsView;