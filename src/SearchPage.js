import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import NativeSelect from '@material-ui/core/NativeSelect'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import axios from 'axios'
import Header from './Header'
import { theme } from './DefaultPageTheme'
import './DefaultPageStyle.css'

const states = [
  'AL',
	'AK',
	'AS',
	'AZ',
	'AR',
	'CA',
	'CO',
	'CT',
	'DE',
	'DC',
	'FM',
	'FL',
	'GA',
	'GU',
	'HI',
	'ID',
	'IL',
	'IN',
	'IA',
	'KS',
	'KY',
	'LA',
	'ME',
	'MH',
	'MD',
	'MA',
	'MI',
	'MN',
	'MS',
	'MO',
	'MT',
	'NE',
	'NV',
	'NH',
	'NJ',
	'NM',
	'NY',
	'NC',
	'ND',
	'MP',
	'OH',
	'OK',
	'OR',
	'PW',
	'PA',
	'PR',
	'RI',
	'SC',
	'SD',
	'TN',
	'TX',
	'UT',
	'VT',
	'VI',
	'VA',
	'WA',
	'WV',
	'WI',
	'WY'
]

class SearchPage extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {search: false, searchResults: []};

    this.pageRef = React.createRef();

    this.onZipChange = this.onZipChange.bind(this);
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.getSearchState = this.getSearchState.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this)
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

  onSelectChange(e)
  {
    this.setState({state: e.target.value})
  }

  getSearchState()
  {
    var state = {};
    var nodes = this.pageRef.parentNode.querySelectorAll('.input');
    for (var i = 0; i < nodes.length; i++)
    {
      var val = nodes[i].querySelector('input').value;
      if (nodes[i].querySelector('input').id === 'phoneNumber')
        val = this._cleanPhoneNumber(val);
      state[nodes[i].querySelector('input').id] = val;
    }
    state['state'] = this.pageRef.parentNode.querySelector('#state').value;
    return state;
  }

  async getSearchResults()
  {
    var state = this.getSearchState()
    var searchKeys = Object.keys(state);

    var sendObj = {}

    for (var i = 0; i < searchKeys.length; i++)
    {
      sendObj[searchKeys[i]] = state[searchKeys[i]]
    }

    var matches = await axios.post('http://3.90.164.170:30098/v1/search', sendObj, {headers: {'Content-Type': 'application/json'}});

    this.setState({search: true, searchResults: matches.data.matches});
  }

  render()
  {
    return (
      <MuiThemeProvider theme={theme}>
        {this.state.search ? <Redirect to={{ pathname: '/results', state: {searchResults: this.state.searchResults} }} /> : null}
        <Header />
        <div className='page' ref={(e) => this.pageRef = e}>
          <Grid container>
            <Grid container spacing={2}>
              <Grid item>
                <TextField id='firstName' label='First Name' className='input' style={theme.palette.gradientgray} />
              </Grid>
              <Grid item>
                <TextField id='middleName' label='Middle Name' className='input' style={theme.palette.gradientgray} />
              </Grid>
              <Grid item>
                <TextField id='lastName' label='Last Name' className='input' style={theme.palette.gradientgray} />
              </Grid>
              <Grid item style={{ flexGrow: 2 }}></Grid>
              <Grid item>
                <TextField id='constituentId' label='Constituent ID' className='input' style={theme.palette.gradientgray} />
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
                <NativeSelect value={this.state.state} inputProps={{ id: 'state' }} style={{ minWidth: '4rem', marginTop: '1rem', paddingLeft: '.4rem', background: theme.palette.gradientgray.background }} onChange={this.onSelectChange}>
                  <option value=''>State</option>
                  {states.map((value, index) =>
                  {
                    return <option value={value} key={index}>{value}</option>
                  })}
                </NativeSelect>
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
                <TextField id='phoneNumber' label='Phone Number' className='input' style={theme.palette.gradientgray} onChange={this.onPhoneNumberChange} />
              </Grid>
            </Grid>
            <Grid container style={{ marginTop: '2rem' }} spacing={2}>
              <Grid item>
                <Button id='searchButton' variant='contained' style={theme.palette.calmblue} onClick={this.getSearchResults}>Search</Button>
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
