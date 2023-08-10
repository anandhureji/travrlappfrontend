 

import React, { useEffect,useRef, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PageTitle from '../layouts/PageTitle';
import { Link } from 'react-router-dom';
import { Button, Grid, TextField, Tooltip } from '@mui/material';



const Search = ( {samples} ) => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  
  const columns = [
    {
      width: 100,
      label: 'Sl No.',
      dataKey: 'id',
    },
    {
      width: 160,
      label: 'Branch Name',
      dataKey: 'branchName',

    },
    {
      width: 160,
      label: 'Places',
      dataKey: 'places',
    },
    {
      width: 180,
      label: 'Tariff',
      dataKey: 'tariff',
    },
    {
      width: 200,
      label: 'Website',
      dataKey: 'website',
    },
    {
      width: 150,
      label: 'Contact',
      dataKey: 'contact',
    },
    {
      width: 90,
      label: 'Email',
      dataKey: 'email',
    },
  ];
  
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
          const filteredResults = samples.filter((sample) =>
      sample.id.toString().includes(value) ||
      sample.branchName.toString().toLowerCase().includes(value.toLowerCase()) ||
      sample.place.toString().toLowerCase().includes(value.toLowerCase())

    
  );
  if (filteredResults.length === 0) {
    alert('No matching results found');
  }
else if(value===""){
    setSearchResults([])
    alert( "Fields can not be empty" )
  }
  else
  {
    setSearchResults(filteredResults);
  }

const sortedResults = filteredResults.sort(
    (a, b) => b.tariff - a.tariff
  );

};


    
    const name='Package Search'
    return (

      <>
      <Card >
      <div className='search-container'>

        <CardContent>
        <br/>
          <PageTitle name={name} />
          <br/>
          
            <>
              <Grid 
                container 
                alignItems='center' 
                display={'flex'}
                justify='center'
                direction="row"
                columnSpacing={2}
              >
                <Grid width='100%'item xs={12} sm={3} md={3} lg={3} >
                  <TextField 
                    label="Search for Branch ID, Branch Name or Places"
                    required
                    variant='standard'
                    size='small'
                    sx={{width:'100%'}}
                    value={searchTerm}
                    onChange={handleSearch}
                    autoFocus
                  />
                </Grid>
                <Grid ml={4}>
                <Button className='btn btn-primary' variant='contained' size='small' type='submit' onClick ={handleSearch}>Search</Button>
                </Grid>
                <Grid ml={3}>
                  <Link to="/add" className="btn btn-primary ">Add</Link>
                </Grid>
                <Grid ml={3}>
                  <Link to = "/update" className = "btn btn-primary" > Update </Link>
                </Grid>
                

                
           <div>    

    <table align='center'>
      <thead>
        <tr>
          <th>Branch Id</th>
          <th>Branch Name</th>
          <th>Place</th>
          <th>Tariff</th>
          <th>Website</th>
          <th>Contact</th>
          <th>Email</th>

        </tr>
      </thead>

      <tbody>
        {searchResults.map((sample) => (
          <tr key={sample.id}>
            <td>{sample.id}</td>
            <td>{sample.branchName}</td>
            <td>{sample.place} </td>
            <td>{sample.tariff} </td>
            <td>{sample.website}</td> 
            <td>{sample.contact}</td>
            <td>{sample.email}</td>

          </tr>
        ))}
        </tbody>
        </table>
        </div>
      
              </Grid></>
           
        </CardContent>
        </div>
      </Card>
      
      </>

    );
    

}

export default Search;


