import React, { createContext, useState, useContext, FC } from 'react';

interface PlaceContextProps {
  currentPlace: string;
  setPlace: (newPlace: string) => void;
}

const PlaceContext = createContext<PlaceContextProps | null>(null);

interface PlaceProviderProps {
  children: React.ReactNode;
}

export const PlaceProvider: FC<PlaceProviderProps> = ({ children }) => {
  const [currentPlace, setCurrentPlace] = useState('Yerevan');

  const setPlace = (newPlace: string) => {
    setCurrentPlace(newPlace);
  };

  const contextValue: PlaceContextProps = { currentPlace, setPlace };

  return (
    <PlaceContext.Provider value={contextValue}>
      {children}
    </PlaceContext.Provider>
  );
};

export const usePlace = (): PlaceContextProps => {
  const context = useContext(PlaceContext);
  if (!context) {
    throw new Error('usePlace must be used within a PlaceProvider');
  }
  return context;
};
