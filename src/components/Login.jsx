import { useEffect, useState } from 'react'
import { API_KEY } from '../api';
export default function Login() {
    let faceio;
    useEffect(() => {
        faceio = new faceIO("fioa4bf3");
    }, []);

    const [user, setUser] = useState([])
    let tempUser= []
    const handleLogIn = async () => {
        try {
            let response = await faceio.authenticate({
                locale: "auto",
            })

            tempUser.push(response.facialId)            
            console.log(` Unique Facial ID: ${response.facialId}
            PayLoad: ${response.payload}
            `);
            for (var property in response.payload) {                                
                tempUser.push(response.payload[property])
            }
            // fetch(`https://api.faceio.net/deletefacialid?key=${API_KEY}&fid=${response.facialId}`)
            // .then((res)=> console.log(res))            
            setUser(tempUser)
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Login
                </h1>
                <div className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">

                    <button
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        onClick={handleLogIn}
                    >
                        Log In
                    </button>

                </div>
                <div>
                    {user?.map((property) =>
                        <li key={property}>{property}</li>
                    )}
                </div>
            </div>
        </div>
    )
}
