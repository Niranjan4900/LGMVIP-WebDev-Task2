import React, { Component } from 'react'
import Spinner from './Spinner';
import Useritems from './Useritems';

export class User extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: false,
            next: false,
            page: 1,
            total_pages : 2,
            buttons: false,
            getuser: true
        }
    }

    handleGetUserClick = async ()=>{
        let url="https://reqres.in/api/users?page=1";
        this.setState({
            loading: true,
            next: true,
            buttons: false,
            getuser: true
        });
        let data1 = await fetch(url);
        let parsedData = await data1.json()
        setTimeout(() => {
            this.setState({
                data: parsedData.data,
                loading: false,
                next: true,
                buttons: true,
                getuser: false
            });
        }, 2000);
        
    }

    handlePrevClick = async ()=>{
        let url=`https://reqres.in/api/users?page=${this.state.page - 1}`;
        this.setState({
            loading: true,
            next: true,
            buttons: false,
            getuser: false
        });
        let data1 = await fetch(url);
        let parsedData = await data1.json()
        setTimeout(() => {
            this.setState({
                data: parsedData.data,
                page: this.state.page - 1,
                loading: false,
                next: true,
                buttons: true,
                getuser: false
            });
        }, 2000);
    }

    handleNextClick = async () =>{
        let url=`https://reqres.in/api/users?page=${this.state.page +  1}`;
        this.setState({
            loading: true,
            next: true,
            buttons: false,
            getuser: false
        });
        let data1 = await fetch(url);
        let parsedData = await data1.json()
        setTimeout(() => {
            this.setState({
                data: parsedData.data,
                page: this.state.page + 1,
                loading: false,
                next: true,
                buttons: true,
                getuser: false
            });
        }, 2000);
    }
    render() {
        return (
            <div className="container my-3">
               {this.state.getuser && <button className="btn btn-success btn-lg float-end" type="submit" onClick={this.handleGetUserClick}>Get User</button>}
                {this.state.next && <div><h1 className="text-center" style={{color: "white"}}>STYLES WORTHS CLIENTS</h1><hr  style={{color: "white"}} /></div>}
                {this.state.loading && <Spinner />}
                <div className="row">
                {!this.state.loading && this.state.data.map((element) => {
                    return <div className="col-md-4">
                        <Useritems avatar={element.avatar} first_name={element.first_name} last_name={element.last_name} email={element.email} />
                    </div>
                })}
                </div>

              { this.state.buttons && <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-lg btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page === this.state.total_pages} type="button" className="btn btn-lg btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> }
            </div>
        )
    }
}

export default User