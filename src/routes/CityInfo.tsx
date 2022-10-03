import React, { useEffect, useState } from "react";
import { City, GetCities } from "../services/CityApi";
import CityDetailsView from "../views/CityDetailsView";
import CityListView  from "../views/CityListView";

const CityInfo = () => {

    const [cities, setCities] = useState<City[]>([])
    const [selectedCity, setSelectedCity] = useState<number | null>()

    useEffect(() => { GetCities().then(setCities) }, [])

    return (
        <div>
            <h1 className="title has-text-link">Cities Overview</h1>
            <div className="level">
                <div className="level-item">
                    <CityListView {...{ cities, selectedCity, setSelectedCity }} />
                </div>
            </div>
            <div>
                <CityDetailsView cityId={selectedCity} />
            </div>
        </div>
    )
}

export default CityInfo;