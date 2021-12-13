import { Link, useLoaderData } from 'remix';
import { getPokemon } from '~/pokemon';
import type { PokemonSimple } from '~/pokemon';

export const loader = () => {
    return getPokemon();
};

export default function Pokemon() {
    const pokemon = useLoaderData<PokemonSimple[]>();
    return (
        <div className='p-4'>
            <h1 className='text-xl mt-4 mb-4'>Pokemon List</h1>
            <ul>
                {pokemon.map((pokemon) => (
                    <Link to={`/pokemon/${pokemon.name}`}>
                        <li
                            key={pokemon.name}
                            className='cursor-pointer hover:bg-red-400 rounded '
                        >
                            {pokemon.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
