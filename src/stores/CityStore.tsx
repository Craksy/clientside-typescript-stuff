import {City, GetCities} from '../services/CityApi'

const Cities: City[] = [];

interface Action<T>{
    type: T
    payload: any
}

type CityStoreAction = "GetCities" | "CreateCity" | "UpdateCity";

// const reducer = async (state, action: Action<CityStoreAction>) => {
//     switch(action.type){
//         case "GetCities":
//             GetCities().then(response => {
//             })
//     }
// }