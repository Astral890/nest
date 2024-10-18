import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="flex justify-between items-center p-4 bg-slate-200 text-black">
            <div>
                <h1 className="text-2xl font-bold">ShowCase de APIs</h1>
            </div>
            <div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}