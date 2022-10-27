import React from 'react';
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Enroll = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <tbody>
                    <tr>
                        <td> Price</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td>Instructor</td>
                        <td>Maggie Strickland</td>
                    </tr>
                    <tr>
                        <td>Duration</td>
                        <td>15 weeks</td>
                    </tr>
                    <tr>
                        <td>Lectures</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td> Enrolled</td>
                        <td>629 students</td>
                    </tr>
                    <tr>
                        <td> Language</td>
                        <td>Language</td>
                    </tr>
                    <tr>
                        <td> Deadline</td>
                        <td>05 Jan 2019</td>
                    </tr>
                </tbody>
            </table>
            <div className='enroll-button'>
            <Link className="btn btn-accent w-11/12 ">Enroll</Link>
            </div>
        </div>
    );
};

export default Enroll;