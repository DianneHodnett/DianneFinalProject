import React from 'react'
import { ApolloProvider } from "react-apollo"
import { HashRouter, Route, Link } from 'react-router-dom'
import './Style/style.css'
import {client} from "./PrismaEndPoint/EndPoint"

import ReadAll from './01-AllApartments'
import Apartments from './02-AddApartment'
import FloorPlan from './03-UpdateFloorPlan'
import Delete1 from './04-DeleteApartment'




export default class extends React.Component{
    render(){

        return(
            <ApolloProvider client={client}>
                <HashRouter>
                    <div className="MainContainer">

                        <div className="menu1">
                            <Link className="menuButton" to="/">All Apartments</Link>
                            <Link className="menuButton" to="/2">Add Apartments</Link>
                            <Link className="menuButton" to="/3">Update Floor Plan</Link>
                            <Link className="menuButton" to="/4">Delete Apartment</Link>
                        </div>
        <hr/>

                        <Route exact path="/" component={ReadAll}/>
                        <Route path="/2" component={Apartments}/>
                        <Route path="/3" component={FloorPlan}/>
                        <Route path="/4" component={Delete1}/>

                        <br/>
                        <hr/>
                        <div>Dianne Hodnett</div>

                    </div>
                </HashRouter>
            </ApolloProvider>

        )
    }
}