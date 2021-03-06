import React, { Component,useState,useEffect } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import { Paper } from '@mui/material';
import Customer from './components/Customer';
import { Table, TableCell,TableRow } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableFooter } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import { CircularProgress } from '@mui/material';


function App() {

  const [customers, setCustomers] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(
    async() => {
    setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 20);
    const result = await axios.get("./api/customers");
    console.log("@@@@@@@@@"+result.data);
    setCustomers(result.data);
  }, []);


  return ( 
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>아이디</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
      {customers!=0 ? customers.map(c=>{
          return(<Customer
            key={c.id}
            id={c.id}
            image={c.image}
            birthday={c.birthday}
            name={c.name}
            gender={c.gender}
            job={c.job}
          />
          );
        }):
        <TableRow>
        <TableCell colSpan="6" align="center">
          <CircularProgress variant="determinate" value={progress}/>
        </TableCell>
      </TableRow>
        }
      </TableBody>
      </Table>
      </TableContainer>
  );
}

export default App;
