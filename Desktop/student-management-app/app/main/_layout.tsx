// context/AuthContext.tsx
import React, { createContext, ReactNode, useState } from "react";

interface AuthContextType {
  user: any | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      if (email === "test@example.com" && password === "1234") {
        setUser({ email });
      } else {
        throw new Error("Invalid credentials");
      }
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string) => {
    setLoading(true);
    try {
      if (email && password) {
        setUser({ email });
      } else {
        throw new Error("Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
