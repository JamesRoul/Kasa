import React, { useState } from 'react';
import './collapse.css';

function Collapse({ label, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="collapse-container">
      <button className={`toggle-button ${isCollapsed ? '' : 'active'}`} onClick={() => setIsCollapsed(!isCollapsed)}>
        {label}
        <div className={`arrow ${isCollapsed ? '' : 'arrow-up'}`}></div>
      </button>
      {!isCollapsed && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Collapse;