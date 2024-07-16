import React from 'react';
import Student from './Student';

// Generate random data for students
const departments = ['Science', 'Arts', 'Commerce'];
const getRandomDepartment = () => departments[Math.floor(Math.random() * departments.length)];
const getRandomGrade = () => Math.floor(Math.random() * 41) + 60; // Grade between 60 and 100

const students = Array.from({ length: 10 }, (_, index) => ({
    name: `Student ${index + 1}`,
    department: getRandomDepartment(),
    finalGrade: 0,
    status: 'Fail',
})).map((student, index) => {
    if (index < 8) {
        student.status = 'Pass';
        student.finalGrade = getRandomGrade();
    }
    return student;
});

const Students = () => {



    return (
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Student Names</th>
                    <th>Department</th>
                    <th>Final Grade</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                    <Student key={index} index={index} student={student} />
                ))}
            </tbody>
            <style>
                {`
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        font-family: Segoe UI;

                    }
                    th, td {
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #0D1B37;
                        color:#FFFFFF;
                        text-transform: uppercase;
                    }
                    tr:nth-child(even) {
                        background-color: #f2f2f2;
                    }
                    /* Adjust the tab spacing */
                    td {
                        padding-right: 20px; /* You can adjust this value */
                        font-weight: 500;

                    }
                  
                        th:last-child {
                        background-color: #205FDC ; /* Change background color for last th (Last Column) */
                    }
                `}
            </style>
        </table>
    );
};

export default Students;
