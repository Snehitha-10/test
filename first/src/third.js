import React,{Component} from "react";
export class Ita1 extends React.Component{
    render()
    {
        return <p>sunitha</p>
    }
}
export class Ita2 extends Component{
    constructor(props){
        super(props);
        this.state={
            message: "welcome ITA"
        }
        }
        updateContent=()=>{
            this.setState({message:"Timed out"});
             }
             updateContent1=()=>{
                this.setState({message:"welcome"});
                 }
    
    render(){
        return(
<div>
    <div classname="h">
        {this.state.message}
        
    </div>
    <div classname="b">
        <button onClick={(this.updateContent)}> click me</button>
    
        <button onClick={(this.updateContent1)}> reset</button>
    </div>
</div>
        ) ;
        //<p>anitha</p>
    }
}

class Ita extends React.Component{
    render()
    {
    
        return (
            <div>
                <p>harshita {this.props.name}</p>
        </div>);
    }
}
export default Ita;