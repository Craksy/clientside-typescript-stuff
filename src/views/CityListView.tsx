import { City } from "../services/CityApi";

interface CityListViewProps{
    cities: City[]
    selectedCity: number | any
    setSelectedCity: (id: number) => void
}

const CityListView = ({cities, selectedCity, setSelectedCity}: CityListViewProps) => {
        const columns = (
            <tr className="">
                <th className="has-text-info has-text-centered">Name</th>
                <th className="has-text-info has-text-centered">Description</th>
                <th className="has-text-info has-text-centered">Country</th>
                <th className="has-text-info has-text-centered">Languages</th>
            </tr>
        )
        return (
            <table className="table is-narrow is-hoverable is-bordered is-striped is-fullwidth">
                <thead>{columns}</thead>
                <tfoot>{columns}</tfoot>
                <tbody>
                    {
                        cities.map(city => {
                            let langs = city.cityLanguages.map(lang => lang.languageName).join(', ');
                            let numlangs = city.cityLanguages.length;
                            let langEntry = numlangs > 1
                                ? <abbr title={langs}>{numlangs} languages</abbr>
                                : <span>{langs}</span>

                            let className = city.cityId === selectedCity ? "has-background-info has-text-light" : "";

                            return (
                                <tr className={className} onClick={() => setSelectedCity(city.cityId)}>
                                    <td>{city.name}</td>
                                    <td>{city.description}</td>
                                    <td>{city.country.countryName}</td>
                                    <td>{langEntry}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )

}

export default CityListView;