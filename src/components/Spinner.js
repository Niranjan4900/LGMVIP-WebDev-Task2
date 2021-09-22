import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="container ">
                <img className="mx-auto d-block" width="200px" src={loading} alt="" />
            </div>
        )
    }
}

export default Spinner