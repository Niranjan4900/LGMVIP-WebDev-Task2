import React, { Component } from 'react'

export class Useritems extends Component {
    render() {
        let {first_name, last_name, email, avatar} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={avatar} className="card-img-top" alt="..." />
                    <div className ="card-body">
                    <h3 className="card-title">{first_name} {last_name}</h3>
                    <p className ="card-text"><strong>Email Id :-</strong> {email}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Useritems