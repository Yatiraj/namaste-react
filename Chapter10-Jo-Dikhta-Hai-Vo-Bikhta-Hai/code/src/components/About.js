import React from 'react';
import Profile from './ProfileClass';

class About extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Best place to make an Api call
    }

    render() {
        return (
            <div>
              <h1>About Us Page</h1>
              <p>
                This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
              </p>
              <Profile />
            </div>
        );
    }
}

export default About;