import React from 'react'
import {Paper, Tabs, Tab} from '@material-ui/core'

export default ({subjects, category, onSelect}) => {
    const index = category
    ? subjects.findIndex(group => group === category) + 1
    : 0

    const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? '' : subjects[index-1])
  
     return <Paper>
    <Tabs value={index} 
    onChange={onIndexSelect} 
    indicatorColor="primary" 
    textColor="primary" 
    centered>

    <Tab label="All"/>
    {subjects.map(group =>
        <Tab label={group}/>
          )}
    
    </Tabs>
    </Paper>

    }

