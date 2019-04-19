import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from "graphql-tag";

import { Mutation } from "react-apollo";
import TweetStatus from './TweetStatus';

const ADD_TWEET = gql`
  mutation ($raw: String!) {
    insert_tweets(objects:[{raw: $raw}]) {
      returning {
        id
      }
    }
  }
`;

class App extends Component {
  render() {
    let input;
    return (
      <div className="App">
        <header className="App-header">
          <Mutation mutation={ADD_TWEET}>
            {(addTweet, {loading, error, data }) => {
              if (data) {
                // return (<span>Dispatched!</span>);
                return (<TweetStatus id={data.insert_tweets.returning[0].id} />);
              }
              if (loading) {
                return (<span>Loading...</span>);
              }
              if (error) {
                return (<span>{error.toString()}</span>);
              }
              return (
                <div>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      addTweet({ variables: { raw: input.value } });
                      input.value = "";
                    }}
                  >
                    <textarea
                      style={{fontSize: 'calc(10px + 2vmin)'}}
                      ref={node => {
                        input = node;
                      }}
                    />
                    <br/>
                    <button style={{fontSize: 'calc(10px + 2vmin)', padding: '10px'}}
                      type="submit">__dangerouslyTweet()</button>
                  </form>
                </div>
              );
            }}
          </Mutation>
        </header>
      </div>
    );
  }
}

export default App;
