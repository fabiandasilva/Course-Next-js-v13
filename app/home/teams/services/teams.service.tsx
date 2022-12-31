export const getTeams = async ()=>{
    const response = await fetch ("http://api.football-data.org/v4/teams/2061", {headers:{
        'X-Auth-token':"0433fe4742a640499f0f58911e1f5e13",
    }})
   
    return response.json()
}