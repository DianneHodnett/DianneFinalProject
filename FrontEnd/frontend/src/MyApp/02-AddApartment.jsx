import React from 'react'
import gql from 'graphql-tag'
import { client} from "./PrismaEndPoint/EndPoint"

export default class extends React.Component{
    state = {buildingName: ''}

    render(){
        const addToDataBase = async () => {
            let temp1 = await client.mutate({
                mutation: gql`
                    mutation{
                        createApartment(data: { name: "${this.state.buildingName}" }){
                            id
                            name
                        }
                    }
                `}).then((result) => {return result.data.createApartment })
            await console.log("Information: ", temp1 )
            await this.setState({ buildingName: ''})
            window.location.reload()
        }
        return(
            <div>
                    <h1>Add Building</h1>
                <div>
                    <h3>Provide Building Name Below</h3>
                    <input className="gralInput" type="text" value={this.state.buildingName }
                    onChange={ (e) => { this.setState({ buildingName: e.target.value}) }}/>
                        <br/><br/>
                        <button className="gralButton" onClick={ addToDataBase } >Add to Data Base</button>
                </div>
            </div>
        )
    }
}