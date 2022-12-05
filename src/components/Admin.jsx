import React, { useEffect, useState } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../api/firebase'
import AdminTableRow from './AdminTableRow';
import { useLocation, Link } from 'react-router-dom';
import { ADMIN_KEY } from '../api';
export default function Admin() {
    const location = useLocation()
    const [attendance, setAttendance] = useState([]);
    console.log(location.state.facialId)
    useEffect(() => {
        const q = query(collection(db, 'attendance'), orderBy('time'))
        onSnapshot(q, (querySnapshot) => {
            setAttendance(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])
    function timeConverter(UNIX_timestamp) {
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }
    return (
        <div className='m-5'>
            <div className="flex items-center justify-end">
                <Link to='/'  className='p-1 border rounded-md text-red-700'>Logout</Link>
            </div>
                <h4 className='text-center my-3 text-2xl font-bold text-red-700'>ADMIN ATTENDANCE LOG </h4>
            <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200 w-10/12 mx-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Sr.
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Name
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Email
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Time Stamp
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            location.state?.facialId === ADMIN_KEY ?
                                attendance.map((att, index) => {
                                    let formattedTime = timeConverter(att.data.time.seconds)
                                    const { name, email } = att.data;
                                    return (
                                        <AdminTableRow
                                            key={att.id}
                                            sr={index + 1}
                                            name={name}
                                            email={email}
                                            timestamp={formattedTime}
                                        />
                                    )
                                }
                                )
                                :
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Please Authorize yourself first! </td>
                                </tr>
                        }

                    </tbody>
                </table>
            </div>
        </div>

    )
}
