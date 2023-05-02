import { POKE_API } from "../config/pokeApi"

export const getAllPokemonsService = async (limit = 100, offset = 0) => {
    const url = `${POKE_API.URL_BASE}${POKE_API.URL_POKEMON}?${POKE_API.PARAMS.LIMIT}${limit}&${POKE_API.PARAMS.OFFSET}${offset * limit}`;
    
    const res = await fetch(url);
    const data = await res.json();

    return data.results;
}
