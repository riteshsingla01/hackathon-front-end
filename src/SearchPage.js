import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Header from './Header'
import { theme } from './DefaultPageTheme'
import './DefaultPageStyle.css'

function SearchPage()
{
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <div className='page'>
        <Grid container>
          <Grid container spacing={2} justify='left'>
            <Grid item>
              <TextField id='first-name' label='First Name' />
            </Grid>
            <Grid item>
              <TextField id='middle-name' label='Middle Name' />
            </Grid>
            <Grid item>
              <TextField id='last-name' label='Last Name' />
            </Grid>
            <Grid item style={{ flexGrow: 2 }}></Grid>
            <Grid item>
              <TextField id='constituent-id' label='Constituent ID' />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: '2rem' }} spacing={2} justify='left'>
            <Grid item>
              <TextField id='street1' label='Address' />
            </Grid>
            <Grid item>
              <TextField id='street2' label='Address 2' />
            </Grid>
            <Grid item>
              <TextField id='city' label='City' />
            </Grid>
            <Grid item>
              <TextField id='state' label='State' />
            </Grid>
            <Grid item>
              <TextField id='zip' label='Zip Code' />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: '2rem' }} spacing={2} justify='left'>
            <Grid item>
              <TextField id='email' label='Email' />
            </Grid>
            <Grid item>
              <TextField id='phone' label='Phone Number' />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: '2rem' }} spacing={2} justify='left'>
            <Grid item>
              <Button variant='contained' color='primary'>Search</Button>
            </Grid>
            <Grid item>
              <Button variant='contained'>Clear</Button>
            </Grid>
          </Grid>
        </Grid>
        </div>
    </MuiThemeProvider>
  )
}

export default SearchPage;
