import './App.css';
import {Button} from '@material-ui/core'
import MaterialTable from 'material-table';
import React,{useState,useEffect}  from 'react';
const Mat=()=>
{
    const[data,setdata]=useState([]);
    useEffect(()=>
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp=>resp.json())
        .then(resp=>setdata(resp))
    },[]);
    const columns=[
        {title:'ID',field:'id'},
        {title:'NAME',field:'name'},
        {title:'EMAIL',field:'email'},
       
        {title:'USER',field:'username'}
    ]
    return(  <>
      
     
      <MaterialTable title="Material Table"
      data={data}
      columns={columns}
      options={{
          search:false,
          filtering:true
      }}
     />
      </>
    );
};
export default Mat;