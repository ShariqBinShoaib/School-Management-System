import React from "react";
import { Link } from "react-router-dom";

function ParentInfo() {
  return (
    <div>
      <h1>Parent Info</h1>
      <Link
        to="/dashboard/admin/users/parent/admit"
        className="btn btn-primary"
        style={{ marginBottom: 20 }}
      >
        Add Parent
      </Link>
    </div>
  );
}

export default ParentInfo;
