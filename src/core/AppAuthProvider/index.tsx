import React, { ReactNode } from 'react';
import FirebaseAuthProvider from 'src/services/auth/firebase/FirebaseAuthProvider';

type Props = {
  children: ReactNode;
};

const AppAuthProvider = ({ children }: Props) => {
  return <FirebaseAuthProvider>{children}</FirebaseAuthProvider>;
};

export default AppAuthProvider;
