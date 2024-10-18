import Link from "next/link";

export default function NavAPI(){
    return(
        <nav>
            <div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/pokeapi">Pokemones</Link>
                    </li>
                    <li>
                        <Link href="/JokeApi">Bromas</Link>
                    </li>
                    <li>
                        <Link href="/Perros">Perritos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}