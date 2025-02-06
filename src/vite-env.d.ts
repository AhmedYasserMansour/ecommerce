/// <reference types="vite/client" />
declare module 'redux-persist/lib/storage';
declare module 'redux-persist/es/persistReducer';
declare module 'redux-persist/es/persistStore';
declare module 'redux-persist/integration/react' {
    export const PersistGate: React.ComponentType<{
      loading?: React.ReactNode;
      persistor: any;
      children: React.ReactNode;
    }>;
  }
  declare module 'react-slick' {
    import * as React from 'react';
    export default class Slider extends React.Component<Settings> {}
  };
  
