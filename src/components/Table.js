import React from 'react'

import"../styles/Table.css";
import { Box } from '@mui/material';
const Table = () => {
    return (
      <div>
        
        <table>
          <thead>
              <tr>
                  <th>Id</th>
                  <th>Description</th>
                  <th>Class</th>
                  <th>Score</th>
                  <th>Index</th>
              </tr>
          </thead>
          <tbody>
          {global.values && (
    <tr>
      <td>{global.values._id}</td>
      <td>{global.values._source.description}</td>
      <td>{global.values._source._class}</td>
      <td>{global.values._score}</td>
      <td>{global.values._index}</td>
    </tr>
  )}
          </tbody>
      </table>
    

          </div>
    )
  }
  export default Table
  
