import React, { useEffect, useState } from 'react';
import axios from 'axios';

const fetchUIConfig = async () => {
  const response = await axios.get('/api/ui-config?role=HR');
  return response.data;
};

const HRDashboard = () => {
  const [uiConfig, setUIConfig] = useState(null);

  useEffect(() => {
    fetchUIConfig().then(setUIConfig);
  }, []);

  return (
    <div className={`dashboard ${uiConfig?.theme || "light"}`}>
      <h2>HR Dashboard</h2>
      {uiConfig?.components?.map((widget, index) => (
        <div key={index} className="widget">{widget.type}</div>
      ))}
    </div>
  );
};

export default HRDashboard;
