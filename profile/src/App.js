import React, { Component } from 'react';
import styles from './app.krem.css';
import { Scoped } from 'kremling';
import ProfileCard from './Profile-card/ProfileCard';
import Contact from './Contact/Contact';

import axios from 'axios';
import config from './config';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      distribution: []
    }
  }

  componentDidMount() {
    const url = `${config.baseURL}${config.endPoint.profile}`;
    axios.get(url)
      .then(res => res.data)
      .then((response) => {
        this.setState({
          profile: response.profile,
          distribution: response.distribution
        })
      },
      (error) => {
        console.log('Error: ', error);
      })
  }

  render() {
    return (
      <Scoped css={styles}>
        <div className="App">
          <header className="App-header">
            <ProfileCard profile={this.state.profile}/>
            <div className='d-none d-md-block'>
              <Contact conatcts={this.state.distribution}/>
            </div>
          </header>
        </div>
      </Scoped>
    );
  }
}

export default App;
