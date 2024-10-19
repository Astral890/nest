import Link from "next/link";

export default function NavAPI(){
    return(
        <div className="flex items-center justify-center h-screen">
            <nav className="bg-gray-800 p-4 rounded-lg shadow-md">
                <div>
                    <ul className="flex space-x-4">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <li>
                                <Link className="text-black font-semibold transition-transform transform hover:scale-105 hover:underline" href="/pokeapi">Pokemones</Link>
                            </li>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <li>
                                <Link className="text-black font-semibold transition-transform transform hover:scale-105 hover:underline" href="/ISS">Estación Espacial Internacional</Link>
                            </li>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <li>
                                <Link className="text-black font-semibold transition-transform transform hover:scale-105 hover:underline" href="/Perros">Perritos</Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
}