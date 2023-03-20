// import logo from './logo.svg';
import Plan from './Plan'; 
import './App.css';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import React, { Component } from 'react'

 class App extends Component {
  state={
    items:[],
    text:"",
  } 
  handleChange =e=>
  {
    this.setState({text:e.target.value})
  }
  handleAdd =e=>
  {
    if(this.state.text!=="")
    {
      const items=[...this.state.items, this.state.text];
      this.setState({items:items ,text:""});
    }
  }
  handleDelete=id=>
  {
    console.log("deleted",id);
    const Olditems=[...this.state.items]
    console.log("olditems",Olditems);
    const items=Olditems.filter((element,i)=>{
      return i!==id
    })

    this.setState({items:items});
  }
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h1 className='text-center'> Today's plan</h1>
          <div className="row">
            <div className="col-9">
              <input type="text" className='form-control' placeholder="write plan here" value={this.state.text} onChange={this.handleChange}/>
            </div>
            <div className="col-2">
              <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleAdd}>Add</button>
            </div>
            <div className="container-fluid">
              <ul className="list-unstyled row m-5">
                  {
                      this.state.items.map((value,i)=>
                      {
                        return <Plan key={i} id={i} value={value} sendData={this.handleDelete}/>
                      })

                  }

                 {/* <Plan/> */}
                {/* {console.log(this.state.items)} */}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
