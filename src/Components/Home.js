import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Menu, Segment, } from 'semantic-ui-react';

const Home = (props) => (
  <>
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item>
          <NavLink
            exact
            to='/'
            activeStyle={styles.active}
          >
            Home
        </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            exact
            to='/game'
            activeStyle={styles.active}
          >
            Play Game
        </NavLink>
        </Menu.Item>
      </Menu>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: '100px',
        height: '1000px',
        marginTop: '300px',
      }}>
        Tic Tac Toe
      </div>
      <p>If I didn't take this navbar from the lesson, I would have taken it from semantic</p>
    </Segment>
  </>
)

const styles = {
  active: {
    color: 'orange',
    fontWeight: 'bold',
  }
}

export default Home;