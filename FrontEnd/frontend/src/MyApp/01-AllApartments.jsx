
import React from 'react'
import gql from "graphql-tag"
import { client} from "./PrismaEndPoint/EndPoint"

import Template from './Template'

export default class extends React.Component{
    state = { property: [] }

    render(){

        const loadProperty = async () => {
            let temp1 = await  client.query({
                query: gql`
                    query{
                        apartments{
                            name
                            address
                        }
                    }
                `}).then((result) => { return result.data.apartments } )

            await  console.log("Information: ", temp1)
            await this.setState({property: temp1})

            return (
                <div>
                    <h1>Read Apartments from Data Base</h1>
                    <button className="gralButton" onClick={loadProperty}>Get all Apartments</button>
                    <br/><br/>

                    {this.state.property[0] ? this.state.apartments.map((x) => {
                        return <Template key={x.name} data={x}/> })
                        : <div>Click to get Apartments</div> }
                </div>
            )
        }
    }
}