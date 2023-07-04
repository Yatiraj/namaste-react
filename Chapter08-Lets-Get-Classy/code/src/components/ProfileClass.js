import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
              name: "Dummy Name",
              location: "Dummy Location",
            },
        };
    }

    componentDidMount() {
        // Make api call here and upate stae
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log("Component Did Update");
    }

    componentWillUnmount() {
        //console.log("ComponentWillUnmount");
    }
    
    render() {
        return (
          <div>
            <h1> Profile Class Component </h1>
            <h2>Name: {this.state.userInfo.name}</h2>
            <h2>Location: {this.state.userInfo.location}</h2>
          </div>
        );
      }
}

export default Profile;