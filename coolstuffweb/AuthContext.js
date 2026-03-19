import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

const AuthContext = createContext({
  user: null,
  error: null,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const signUp = useCallback((email, password) => {
    setError(null);
    const normalized = (email ?? "").trim().toLowerCase();
    if (!normalized || !password) {
      setError("Email and password are required.");
      return false;
    }

    const exists = users.some((u) => u.email === normalized);
    if (exists) {
      setError("An account with that email already exists.");
      return false;
    }

    const newUser = { email: normalized, password };
    setUsers((prev) => [...prev, newUser]);
    setUser({ email: normalized });
    return true;
  }, [users]);

  const signIn = useCallback((email, password) => {
    setError(null);
    const normalized = (email ?? "").trim().toLowerCase();
    const found = users.find((u) => u.email === normalized && u.password === password);
    if (!found) {
      setError("Invalid email or password.");
      return false;
    }
    setUser({ email: normalized });
    return true;
  }, [users]);

  const signOut = useCallback(() => {
    setUser(null);
    setError(null);
  }, []);

  const value = useMemo(
    () => ({ user, error, signIn, signUp, signOut }),
    [user, error, signIn, signUp, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
