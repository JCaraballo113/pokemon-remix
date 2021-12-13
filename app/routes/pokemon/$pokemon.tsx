import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import { getPokemonDetail } from '~/pokemon';
import type { PokemonDetail } from '~/pokemon';
import invariant from 'tiny-invariant';

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.pokemon, 'expected params.pokemon');

    return getPokemonDetail(params.pokemon);
};
export default function PokemonDetail() {
    const pokemon: PokemonDetail = useLoaderData();
    return (
        <div className='flex items-center flex-col mt-4 bg-red-400 ml-8 mr-8 rounded '>
            <img className='w-24' src={pokemon.sprites.front_default} alt='' />
            <h1>{pokemon.name}</h1>
            <div className='flex flex-col w-6/12 bg-pk-blue rounded ml-auto mr-auto pl-10 pr-10 items-center text-white'>
                <h2 className='underline'>Types</h2>
                {pokemon.types.map((t) => (
                    <p key={t.type.name}>{t.type.name}</p>
                ))}
            </div>
            <div className='flex w-full'>
                <div className='w-6/12'>
                    <div className='bg-pk-green self-start rounded p-4 mt-4 text-white'>
                        <h2 className='underline'>Abilities</h2>
                        <ul>
                            {pokemon.abilities.map((a) => (
                                <li key={a.ability.name}>{a.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='bg-pk-yellow self-start rounded p-4 mt-4 text-white'>
                        <h2 className='underline'>Moves</h2>
                        <ul>
                            {pokemon.moves.map((m) => (
                                <li key={m.move.name}>{m.move.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-6/12 ml-4'>
                    <div className='bg-pk-orange self-start rounded p-4 mt-4 text-white'>
                        <h2 className='underline'>Stats</h2>
                        <p>Weight: {pokemon.weight} lb.</p>
                        <p>Height: {pokemon.height} ft.</p>
                        {pokemon.stats.map((s) => (
                            <p key={s.stat.name}>
                                {s.stat.name}: {s.base_stat}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
