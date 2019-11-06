
import React from 'react';

export const ViewTable = ({ data }) => {
    const { email, username, password, phone, address } = data;
    return <>
        <table table table-hover>
            <thead>
                <tr>
                    <th className="bgcolors">Email</th>
                    <th className="bgcolors" scope="col">userName</th>
                    <th className="bgcolors" scope="col">Password</th>
                    <th className="bgcolors" scope="col">Phone</th>
                    <th className="bgcolors" scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{email}</td>
                    <td>{username}</td>
                    <td>{password}</td>
                    <td>{phone}</td>
                    <td>{address}</td>
                </tr>
            </tbody>
        </table>
    </>
}