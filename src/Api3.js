import React from "react";
import './App.css';

class Api3 extends React.Component { 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
          
        };
   } 
    
    //its better to put the link in env
    componentDidMount() {
        fetch(
"http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { items } = this.state;
        
   
        return (
        <div className = "App">

            <h1>wall-gallery 🖼</h1> 
             {
                items.map((item) => ( 
                  <div className="gallery">
                <img src = {item.urls.raw}/>               
                    </div>
                ))
            }
        </div>
    );
}
}
export default Api3;
