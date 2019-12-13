import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import TablePagination from '@material-ui/core/TablePagination'
import AppBar from '@material-ui/core/AppBar';
import NativeSelect from '@material-ui/core/NativeSelect'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios'
import Header from './Header'
import { theme } from './DefaultPageTheme'
import './DefaultPageStyle.css'

function sortCompare(a, b, sortColumn, sortDirection)
{
  if (a[sortColumn] < b[sortColumn] && sortDirection === 'asc')
    return -1;
  else
    return 1;
}

function sortResults(results, sortColumn, sortDirection)
{
  return results.sort((a, b) => sortCompare(a, b, sortColumn, sortDirection));
}

const ResultsPage = (props) =>
{
  const [state, setState] = useState({page: 0, gotoSearch: false, searchResults: [], resultsPerPage: 50, sortColumn: '', sortDirection: 'asc'});

  const getSearchResults = async () =>
  {
    var searchKeys = Object.keys(props.location.state.search);

    var sendObj = {}

    for (var i = 0; i < searchKeys.length; i++)
    {
      sendObj[searchKeys[i]] = props.location.state.search[searchKeys[i]]
    }

    var matches = await axios.post('http://epsappd1s1.alsac.local/ConstituentSearch/v1/search', sendObj, {headers: {'Content-Type': 'application/json'}});

    setState(prevState => {return {...prevState, searchResults: matches.matches}});
  }

  getSearchResults();

  const selectColumnChange = (e) =>
  {
    var res = sortResults(state.searchResults, e.target.value, state.sortDirection);
    setState(prevState => {return {...prevState, sortColumn: e.target.value, searchResults: res}});
  }

  const selectDirectionChange = (e) =>
  {
    var res = sortResults(state.searchResults, state.sortColumn, e.target.value);
    setState(prevState => {return {...prevState, sortDirection: e.target.value, searchResults: res}});
  }

  const TopBar = () =>
  {
    return (
      <AppBar position='fixed' style={{ marginTop: '4.5rem', backgroundColor: theme.palette.gray.light }}>
        <Grid container spacing={2}>
          <Grid item style={{ marginTop: '.5rem', marginLeft: '1rem' }}>
            <Button id='searchButton' variant='contained' style={theme.palette.calmblue} onClick={() => setState(prevState => {return {...prevState, gotoSearch: true}})}>Search</Button>
          </Grid>
          <Grid item style={{ flexGrow: 2 }}></Grid>
          <Grid item>
            <TablePagination component='div' count={state.searchResults.length} rowsPerPage={state.resultsPerPage} page={state.page}
              onChangeRowsPerPage={(e) => setState(prevState => {return {...prevState, resultsPerPage: e.target.value}})}
              onChangePage={(e, p) => setState(prevState => {return {...prevState, page: p}})} />
          </Grid>
          <Grid item style={{ flexGrow: 2 }}></Grid>
          <Grid item style={{ marginTop: '.5rem' }}>
            <NativeSelect value={state.sortColumn} inputProps={{ id: 'sort-column' }} style={{ minWidth: '8rem', paddingLeft: '.4rem' }} onChange={selectColumnChange}>
              <option value=''>Sort</option>
              <option value='firstName'>First Name</option>
              <option value='middleName'>Middle Name</option>
              <option value='lastName'>Last Name</option>
              <option value='constituentId'>Constituent ID</option>
              <option value='street1'>Street</option>
              <option value='city'>City</option>
              <option value='state'>State</option>
              <option value='zip'>Zip Code</option>
              <option value='phoneNumber'>Phone Number</option>
              <option value='email'>Email</option>
            </NativeSelect>
          </Grid>
          <Grid item style={{ marginTop: '.5rem', marginRight: '1rem' }}>
            <NativeSelect value={state.sortDirection} inputProps={{ id: 'sort-direction' }} style={{ minWidth: '4rem', paddingLeft: '.4rem' }} onChange={selectDirectionChange}>
              <option value='asc'>Asc</option>
              <option value='desc'>Desc</option>
            </NativeSelect>
          </Grid>
        </Grid>
      </AppBar>
    )
  }

  const ResultPage = (props) =>
  {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{props.constituent.firstName + ' ' + props.constituent.middleName + ' ' + props.constituent.lastName}</Typography>
          <Typography style={{ position: 'absolute', left: '80%' }}>{props.constituent.constituentId}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography>Address: {props.constituent.street1 + ' ' + props.constituent.city + ', ' + props.constituent.state + ', ' + props.constituent.zip}</Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
            <Typography>Phone Number: {props.constituent.phoneNumber}</Typography>
            <Typography style={{ position: 'absolute', left: '80%' }}>Email: {props.constituent.email}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  return (
    <MuiThemeProvider theme={theme}>
      {state.gotoSearch ? <Redirect to='/search' /> : null}
      <Header />
      <TopBar />
      <div className='page' style={{ marginTop: '10rem' }}>
        <Grid container spacing={1} style={{ display: 'block', alignItems: 'center', justifyContent: 'center' }}>
          {state.searchResults.map((value, index) =>
          {
            return <Grid item key={'key' + index}><ResultPage constituent={value} key={index} /></Grid>
          })}
        </Grid>
        <Grid container spacing={1} style={{ display: 'block', alignItems: 'center', justifyContent: 'center' }}>
          <Grid item>
            <TablePagination component='div' count={state.searchResults.length} rowsPerPage={state.resultsPerPage} page={state.page}
              onChangeRowsPerPage={(e) => setState(prevState => {return {...prevState, resultsPerPage: e.target.value}})}
              onChangePage={(e, p) => setState(prevState => {return {...prevState, page: p}})} />
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

export default ResultsPage;
