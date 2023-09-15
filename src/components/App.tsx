import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import "./App.css";

import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

export function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <>
      <p>Hello {user?.username}!</p>
      {/* <button className="button-1" role="button" onClick={signOut}>Sign out</button>
      <button className="button-27" role="button">Button 27</button> */}

      <button onClick={signOut}>
        <span>Sign out</span>
      </button>
    </>
  );
}

export default withAuthenticator(App);