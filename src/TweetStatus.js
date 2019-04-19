import React from 'react';
import gql from "graphql-tag";
import {Subscription} from "react-apollo";

const TweetStatus = ({id, raw}) => (
  <Subscription
    subscription={gql`
      subscription ($id: uuid!) {
        tweets(where:{id: {_eq: $id}}) {
          id
          sanitized
        }
      }`}
    variables={{id}}>
    {({loading, error, data}) => {

      if (!data || !data.tweets[0].sanitized) {
        return(<span><img src="https://i.giphy.com/media/TG9ko7uVhkkde2eVAU/giphy.webp" /></span>);
      }

      if (data && data.tweets[0].sanitized) {
        const sanitized=data.tweets[0].sanitized;
        return (<div>
          {sanitized}
          <br/><br/>
          <img src="https://i.giphy.com/media/l3nSxBDg5obIiU9Ko/giphy.webp" />
        </div>);
      }
    }}
  </Subscription>
);

export default TweetStatus;
