export default function Login(){
    return(
        <div className="flex flex-col items-center">
            <input type="text" placeholder="Usuario"></input>
            <input type="password" placeholder="Password"></input>
            <button>Login</button>
        </div>
    )
}