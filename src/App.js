// import React, { Component } from 'react'
// import Comp from './Comp';

// export class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       articles:this.articles,
//       loading:false
//     }
//   }
//   async componentDidMount(){ 
//     console.log('mounting')
//     let url = 'https://newsapi.org/v2/top-headlines?articlesry=us&category=business&apiKey=0b84fdc73a324b859645e6fcb6ce25f0';
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData)
//     this.setState({articles: parsedData.articles});
//   }

//   render() {
//     return (
//       <div className="container">
      
//           <h1>gopi</h1>
//           <div className="">
//           {this.state.articles && this.state.articles.map((e)=>{
//             return <div className="" key ={e.url}>
//             <Comp title={e.title}/> 
//             </div>
//           })}
//           </div>
//           </div>
//     )
//   }
// }

// export default App


// import React, { Component } from 'react'
// import Comp from './Comp';

// export class App extends Component {
  
//   state = {
//       name:'',
//       age:30,
//       count:0
//   }
//   inc=()=>{this.setState((prevState)=> ({count: prevState.count+1}));
//   }
//   // inc=()=>{
//   //   this.setState({count: this.state.count+1})
//   // }
  
//   async componentDidMount(){
//     setTimeout(()=>{
//       this.setState({name: this.state.name='khushbu'});
//       console.log('component created and name is updated');
//     },1000)
    
//     setTimeout(()=>{
//       this.setState({count: this.state.count=1000000});
//       console.log('component created and articles is updated');
//     },1000)
//   }

//   render() {
//     return (
//       <div className="container">
//         <h1>Class Components</h1>  
//         <h3>{this.state.name}</h3>
//         <h3>{this.state.count}</h3> 
//        <button onClick={this.inc}>
//           Increment</button>
         
//           </div> 
//     )
//   }
// }

// export default App


import React, { Component } from 'react' 

export class App extends Component {
  
  state = {
      name:'', 
      count:0,
      prevName:''
  }
  inc=()=>{this.setState((prevState)=> ({count: prevState.count+1}));
  }
  // inc=()=>{
  //   this.setState({count: this.state.count+1})
  // }
  
   componentDidMount(){
    setTimeout(()=>{ 
      this.setState({count:10});
      // console.log('10')
    },3000)
  }

  componentDidUpdate(prevProps,prevStates){
    console.log('ComponentDidUpdate() runs')
    if(prevStates.name !== this.state.name){
      this.setState({prevName:prevStates.name});
      // this.setState({prevName:prevStates.name});
    }
  }
  // componentDidUpdate(){
  //   if(this.state.count<50){
  //     this.setState((prevState)=> ({count: prevState.count+10}))
  //   }
  // }

  render() {
    return (
      <div className="container">
        <h1>Class Components</h1>  
        <h3>Current state.........{this.state.name}</h3>
        <p>Previous state.....{this.state.prevName}</p>
        <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
        <h3>{this.state.count}</h3> 
       <button onClick={this.inc}>
          Increment</button>
         
          </div> 
    )
  }
}

export default App

