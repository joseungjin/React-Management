import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Paper } from '@mui/material';
import Customer from './components/Customer';
import { Table, TableCell,TableRow } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableFooter } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';

const customers =[
  {
    'id':1
    ,'image':'https://placeimg.com/64/64/1'
    ,'name':'조승진'
    ,'birthday':'960807'
    ,'gender':'남'
    ,'job':'대학생'
  },
  {
    'id':2
    ,'image':'https://placeimg.com/64/64/2'
    ,'name':'홍길동'
    ,'birthday':'960807'
    ,'gender':'남'
    ,'job':'대학생'
  },
  {
    'id':3
    ,'image':'https://placeimg.com/64/64/3'
    ,'name':'이순신'
    ,'birthday':'960807'
    ,'gender':'남'
    ,'job':'대학생'
  },
]


function App() {
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
      {
        customers.map(c=>{
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
        })
      }
      </TableBody>
      </Table>
      </TableContainer>
  );
}

export default App;
