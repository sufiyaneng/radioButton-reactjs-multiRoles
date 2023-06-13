import React, { useState } from "react";

const RoleSelection = () => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  console.log("roles", selectedRoles);
  const handleRoleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedRoles((prevSelectedRoles) => [...prevSelectedRoles, value]);
    } else {
      setSelectedRoles((prevSelectedRoles) =>
        prevSelectedRoles.filter((role) => role !== value)
      );
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="admin"
          checked={selectedRoles.includes("admin")}
          onChange={handleRoleChange}
        />
        Admin
      </label>

      <label>
        <input
          type="checkbox"
          value="localUser"
          checked={selectedRoles.includes("localUser")}
          onChange={handleRoleChange}
        />
        Local User
      </label>

      <label>
        <input
          type="checkbox"
          value="developer"
          checked={selectedRoles.includes("developer")}
          onChange={handleRoleChange}
        />
        Developer
      </label>
    </div>
  );
};

export default RoleSelection;
