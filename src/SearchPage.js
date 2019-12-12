import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Header from './Header'
import { theme } from './DefaultPageTheme'
import './DefaultPageStyle.css'

class SearchPage extends Component
{
  constructor(props)
  {
    super(props);

    this.pageRef = React.createRef();

    this.onZipChange = this.onZipChange.bind(this);
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  onZipChange(e)
  {
    if (isNaN(e.target.value.replace('-', '')) || e.target.value.length > 10 || e.target.value.slice(-1) === '-')
    {
      e.target.value = e.target.value.substring(0, e.target.value.length - 1)
    }
    else if (e.target.value.length === 6)
    {
      e.target.value = e.target.value.substring(0, 5) + '-' + e.target.value.charAt(5);
    }
  }

  _cleanPhoneNumber(number)
  {
    if (number.length)

    if (number.length !== 13
      || number.charAt(0) !== '('
      || number.charAt(4) !== ')'
      || number.charAt(8) !== '-'
      || isNaN(number.substring(1, 4))
      || isNaN(number.substring(5, 8))
      || isNaN(number.substring(9, 13)))
    {
      return null;
    }

    return number.replace('(', '').replace(')', '').replace('-', '');
  }

  onPhoneNumberChange(e)
  {
    if (e.target.value.length > 13 || isNaN(e.target.value.replace('(', '').replace(')', '').replace('-', '')) || e.target.value.slice(-1) === '(' || e.target.value.slice(-1) === ')' || e.target.value.slice(-1) === '-')
    {
      e.target.value = e.target.value.substring(0, e.target.value.length - 1);
    }
    else if (e.target.value.length === 4)
    {
      e.target.value = '(' + e.target.value.substring(0, 3) + ')' + e.target.value.charAt(3);
    }
    else if (e.target.value.length === 9)
    {
      e.target.value = e.target.value.substring(0, 8) + '-' + e.target.value.charAt(8);
    }

    if (e.target.value.charAt(0) === '(' && e.target.value.indexOf(')') === -1)
    {
      e.target.value = e.target.value.substring(1, e.target.value.length);
    }
  }

  clearInputs()
  {
    var nodes = this.pageRef.parentNode.querySelectorAll('.input');
    for (var i = 0; i < nodes.length; i++)
    {
      nodes[i].querySelector('input').value = '';
    }
  }

  render()
  {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <div className='page' ref={(e) => this.pageRef = e}>
          <Grid container>
            <Grid container spacing={2}>
              <Grid item>
                <TextField id='first-name' label='First Name' className='input' style={theme.palette.gradientgray} />
              </Grid>
              <Grid item>
                <TextField id='middle-name' label='Middle Name' className='input' style={theme.palette.gradientgray} />
              </Grid>
              <Grid item>
                <TextField id='last-name' label='Last Name' className='input' style={theme.palette.gradientgray} />
              </Grid>
              <Grid item style={{ flexGrow: 2 }}></Grid>
              <Grid item>
                <TextField id='constituent-id' label='Constituent ID' className='input' style={theme.palette.gradientgray} />
              </Grid>
            </Grid>
            <Grid container style={{ marginTop: '2rem' }} spacing={2}>
              <Grid item>
                <TextField id='street1' label='Address' className='input' style={theme.palette.gradientgray} />
              </Grid>
              <Grid item>
                <TextField id='street2' label='Address 2' className='input' style={theme.palette.gradientgray} />
              </Grid>
              <Grid item>
                <TextField id='city' label='City' className='input' style={theme.palette.gradientgray} />
              </Grid>
              <Grid item>
                <TextField id='state' label='State' className='input' style={theme.palette.gradientgray} />
              </Grid>
              <Grid item>
                <TextField id='zip' label='Zip Code' className='input' style={theme.palette.gradientgray} onChange={this.onZipChange} />
              </Grid>
            </Grid>
            <Grid container style={{ marginTop: '2rem' }} spacing={2}>
              <Grid item>
                <TextField id='email' label='Email' className='input' style={theme.palette.gradientgray} />
              </Grid>
              <Grid item>
                <TextField id='phone' label='Phone Number' className='input' style={theme.palette.gradientgray} onChange={this.onPhoneNumberChange} />
              </Grid>
            </Grid>
            <Grid container style={{ marginTop: '2rem' }} spacing={2}>
              <Grid item>
                <Button id='searchButton' variant='contained' style={theme.palette.calmblue}>Search</Button>
              </Grid>
              <Grid item>
                <Button id='clearButton' variant='contained' style={theme.palette.calmblue} onClick={this.clearInputs}>Clear</Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default SearchPage;
