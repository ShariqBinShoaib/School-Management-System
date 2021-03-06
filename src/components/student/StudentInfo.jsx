import React from "react";
import { Link } from "react-router-dom";

function StudentInfo() {
  return (
    <div>
      <h1>Student Info</h1>
      <Link
        to="/dashboard/admin/users/student/admit"
        className="btn btn-primary"
        style={{ marginBottom: 20 }}
      >
        Add Student
      </Link>
    </div>
  );
}

export default StudentInfo;
