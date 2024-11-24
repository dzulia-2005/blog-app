import { createContext, PropsWithChildren, useState, useContext } from "react";


type AuthContextType = {
  user: any;
  handleSetUser: (user: any) => void;
};


export const Authcontext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const [user, setUser] = useState<any>(null);

  const handleSetUser:any = (newUser: any) => {
    setUser(newUser);
  };

  return (
    <Authcontext.Provider value={{ user, handleSetUser }}>
      {children}
    </Authcontext.Provider>
  );
};

export const Useauthcontext = () => {
  const context = useContext(Authcontext);
  if (!context) {
    throw new Error("Useauthcontext must be used within an AuthProvider");
  }
  return context;
};
