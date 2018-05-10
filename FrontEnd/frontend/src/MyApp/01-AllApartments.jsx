
import React from 'react'
import gql from "graphql-tag"
import { client} from "./PrismaEndPoint/EndPoint"

import Template from './99-Template'

export default class extends React.Component{
    state = { apartments: [] }

    render(){

        const loadApartment = async () => {
            let temp1 = await  client.query({
                query: gql`
                    query{
                        apartments{
                            name
                            address
                        }
                    }
                `
            }).then((result) => { return result.data.users } )

            await  console.log("Information: ", temp1)
            await this.setState({apartments: temp1})

            return (
                <div>
                    <h1>Read Apartments from Data Base</h1>
                    <button className="gralButton" onClick={loadApartment}>Get all apartments</button>
                    <br/><br/>

                    {this.state.apartments[0] ? this.state.apartments.map((x) => {
                        return <Template key={x.name} data={x}/>
                    }) : <div>Click to get Apartments</div>}
                </div>
            )
        }
    }
}