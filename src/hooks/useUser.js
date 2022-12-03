import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
  const [userIsLoading, setUserIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const cancelSubscription = onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
      setUserIsLoading(false);
    });

    return cancelSubscription;
  });

  return { user, userIsLoading };
};

export { useUser };
