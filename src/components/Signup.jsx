import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { API_KEY } from '../api/index'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    let faceio;
    useEffect(() => {
        faceio = new faceIO("fioa4bf3");
    }, []);


    const handleSignUp = async () => {
        try {

            console.log(` Unique Facial ID: ${response.facialId}
          Enrollment Date: ${response.timestamp}
          Gender: ${response.details.gender}
          Age Approximation: ${response.details.age}`);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Get started today
                </h1>
                <div className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                    <p className="text-lg font-medium">Create a new account</p>

                    <div>
                        <label htmlFor="email" className="text-sm font-medium">Email</label>

                        <div className="relative mt-1">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Name" className="text-sm font-medium">Name</label>

                        <div className="relative mt-1">
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                        </div>
                    </div>

                    <button
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        onClick={handleSignUp}
                    >
                        Sign up
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account?
                        <Link className="underline" to='/login'>Log in</Link>
                    </p>
                </div>
            </div>
        </div>

    )
}

