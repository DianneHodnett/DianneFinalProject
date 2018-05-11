import React from 'react'
import gql from "graphql-tag"
import { client } from './PrismaEndPoint/EndPoint'


export default class extends React.Component{
    state = { buildingID: '', buildingName: '' }

    render(){

        const updateDataBase = async () => {
            let temp1 = await client.mutate({
                mutation: gql`
                    mutation {
                        updateApartment(
                            data: { name: "${this.state.buildingName}" }
                            where: { id: "${this.state.buildingID}" }
                        ){
                            id
                            name
                        }
                    }
                `}).then((result) => { return result.data.createApartment})

            await console.log("Apartment Deleted: ", temp1 )
            await this.setState({ buildingName: '', buildingID: ''})
            window.location.reload()
        }
        return(
            <div>
                <h1>Update Building Information </h1>
            </div>
                <h3>Provice Info to Update</h3>

                <div>Provide ID of building to Update:</div>
                <input className="gralInput" type="text" value={ this.state.buildingName }
                onChange={ (e) => { this.setState({ buildingName: <e className="target value"></e>})} />
        <br/><br/>
            <button className="gralButton" onClick={ updateDataBase } >Yodate Data Base</button>
        </div>
        </div>

        )
    }
}