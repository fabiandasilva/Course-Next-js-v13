import React from 'react'
import { TeamList } from './components';
import { getTeams } from './services'

async function Teams() {
    const data = await getTeams();
    console.log(data);
  return (
    <div>
        <p>Teams</p>
        <div><TeamList data={data}/></div>
    </div>
  )
}

export default Teams