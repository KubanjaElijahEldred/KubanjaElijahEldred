// context/AuthContext.tsx
import { createContext, ReactNode, useState } from "react";

// Context type
interface AuthContextType {
  user: any | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
}

// Create context
export const AuthContext = createContext<AuthContextType | null>(null);

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const login = async (email: string, password: string) => {
    // Mock login
    if (email === "test@example.com" && password === "1234") {
      setUser({ email });
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const signup = async (email: string, password: string) => {
    // Mock signup (replace with real API call)
    if (email && password) {
      setUser({ email });
    } else {
      throw new Error("Signup failed");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
