import React from "react";

const OrganSelect = ({ organs, selectedOrgan, onOrganChange }) => {
  return (
    <div>
      <label htmlFor="organ">Organul afectat:</label>
      <select
        id="organ"
        name="organ"
        value={selectedOrgan}
        onChange={(e) => onOrganChange(e.target.value)}
      >
        <option value="">-- Selectează organul --</option>
        {organs.map((organ) => (
          <option key={organ.value} value={organ.value}>
            {organ.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrganSelect;
