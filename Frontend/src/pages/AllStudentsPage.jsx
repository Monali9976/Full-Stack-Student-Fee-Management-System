import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllStudentsPage = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/students/all`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // return (
  //   <div className="min-h-screen bg-gray-100 p-8">
  //     <div className="bg-white p-6 rounded shadow-md max-w-4xl mx-auto">
  //       <h2 className="text-2xl font-bold mb-4 text-center">All Students</h2>
  //       <table className="w-full table-auto border-collapse">
  //         <thead>
  //           <tr className="bg-gray-200 text-left">
  //             <th className="p-2 border">Name</th>
  //             <th className="p-2 border">Email</th>
  //             <th className="p-2 border">Fees Paid</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {students.map((student) => (
  //             <tr key={student._id} className="hover:bg-gray-50">
  //               <td className="p-2 border">{student.name}</td>
  //               <td className="p-2 border">{student.email}</td>
  //               <td className="p-2 border">{student.feesPaid ? 'Yes' : 'No'}</td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   </div>
  // );

   return (
    <div
      className="min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1740&q=80')" }}
    >
      <div className="bg-white bg-opacity-90 p-6 rounded shadow-md max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">All Students</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Fees Paid</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id} className="hover:bg-gray-50">
                <td className="p-2 border">{student.name}</td>
                <td className="p-2 border">{student.email}</td>
                <td className="p-2 border">{student.feesPaid ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudentsPage;
