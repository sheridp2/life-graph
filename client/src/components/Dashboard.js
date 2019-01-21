import React from "react";
import {Link} from 'react-router-dom';
import Graph from './Graph.js'

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dashboard</h1>
      <Graph />
      <div style ={{paddingTop:'10px' }}>
        <Link to="/entrys/new" className="">
          <a class="waves-effect red btn"><i class="material-icons right">add</i>New Survey</a>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
