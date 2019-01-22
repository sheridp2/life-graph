import React from "react";
import {Link} from 'react-router-dom';
import Graph from './Graph.js'

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dashboard</h1>
      <Graph />
      <div style ={{paddingTop:'10px' }}>
        <Link to="/entrys/new">
          <div className="waves-effect #558b2f light-green darken-3 btn"><i className="material-icons right">add</i>New Entry</div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
