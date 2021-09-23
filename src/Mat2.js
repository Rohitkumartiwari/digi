import './App.css';
import { Button } from '@material-ui/core'
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState, useEffect } from 'react';

const Mat2 = () => {
    const[data,setdata]=useState([]);
    useEffect(()=>
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp=>resp.json())
        .then(resp=>setdata(resp))
    },[]);

    const columns = [
        { title: 'ID', field: 'id' },
        { title: 'NAME', field: 'name' },
        { title: 'EMAIL', field: 'email' },
    ]
    console.log(data);
    return (<>
        <MaterialTable title="Material Table"
            data={data}
            columns={columns}

            editable={{
                onRowAdd: (newRow) => new Promise((resolve, reject) => {
                    const updatedRow = [...data, newRow];
                    console.log(updatedRow);
                    setdata(updatedRow)
                    resolve()
                    console.log(newRow);
                    console.log(data);
                }),
                onRowDelete: selectedRow => new Promise((resolve, reject) => {
                    const index = selectedRow.tableData.id;
                    console.log(index);
                    const updatedRow = [...data];
                    updatedRow.splice(index, 1)
                    setdata(updatedRow)
                    resolve()
                }),
                onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>
                {
                    const index=oldRow.tableData.id
                    console.log("updated row",updatedRow)
                    console.log("old row",oldRow)
                    const updatedRows = [...data];
                    updatedRows[index]=updatedRow;
                    setdata(updatedRows)
                    resolve()
                })
            }}
            options={{
                actionsColumnIndex: -1
            }}

        />
        <br></br>
         <Autocomplete
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
    </>
    
    );
};
export default Mat2;