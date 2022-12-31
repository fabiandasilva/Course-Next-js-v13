import React from 'react'
import { getTeams } from './services'

async function Teams() {
    const data = await getTeams();
  return (
    <div>
        <p>Teams</p>
        <>{JSON.stringify(data)}</>
    </div>
  )
}

export default Teams