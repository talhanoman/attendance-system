import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { ADMIN_KEY } from '../api';
// Firebase
import { db } from '../api/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { Toast, callToast } from './Toast';

export default function Login() {
    const [toastDisplay, setToastDisplay] = useState('hidden')
    const [role, setRole] = useState('')
    const navigate = useNavigate('')
    const [user, setUser] = useState([])
    let tempUser = []
    const handleLogIn = async () => {
        let faceio = new faceIO("fioa4bf3");
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
            if (tempUser[0] === ADMIN_KEY) {
                setRole('admin')
                setTimeout(() => {
                    callToast(setToastDisplay)
                }, 2000)
                setTimeout(() => {
                    navigate('/admin', { state: { facialId: response.facialId } });
                }, 4000)

            }
            else {
                try {
                    await addDoc(collection(db, 'attendance'), {
                        face_uuid: tempUser[0],
                        email: tempUser[1],
                        name: tempUser[2],
                        roll_no: tempUser[3],
                        time: Timestamp.now()
                    })
                    setTimeout(() => {
                        callToast(setToastDisplay)
                    }, 2000);
                    setTimeout(() => {
                        window.location.reload()
                    }, 3000);
                } catch (err) {
                    alert(err)
                }
            }
            setUser(tempUser)
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Toast message={role === 'admin' ? 'Welcome Admin' : `Your attendance has been Marked ${user[2]}`} display={toastDisplay} />
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-red-700 sm:text-3xl">
                        Attendance
                    </h1>
                    <div className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">

                        <button
                            className="block w-full rounded-lg bg-red-700 px-5 py-3 text-sm font-medium text-white"
                            onClick={handleLogIn}
                        >
                            Mark Attendance
                        </button>

                    </div>
                </div>
                <p className="text-center text-sm text-gray-500">
                    Create Account?
                    <Link className="underline" to='/signup'>Sign Up</Link>
                </p>
            </div>
        </>
    )
}
