export type PokemonSimple = {
    name: string;
    url: string;
};

type Ability = {
    ability: {
        name: string;
    };
};

type PokemonMove = {
    move: {
        name: string;
    };
};

type PokemonStat = {
    base_stat: number;
    stat: {
        name: string;
    };
};

type PokemonType = {
    type: {
        name: string;
    };
};

export type PokemonDetail = {
    name: string;
    abilities: Ability[];
    height: number;
    moves: PokemonMove[];
    sprites: {
        front_default: string;
    };
    stats: PokemonStat[];
    types: PokemonType[];
    weight: number;
};

const API_URL = 'https://pokeapi.co/api/v2';
export async function getPokemon() {
    const { results }: { results: PokemonSimple[] } = await fetch(
        `${API_URL}/pokemon?limit=999`
    ).then((response) => response.json());
    return results;
}

export async function getPokemonDetail(pokemonName: string) {
    const data: PokemonDetail = await fetch(
        `${API_URL}/pokemon/${pokemonName}`
    ).then((response) => response.json());
    return data;
}
