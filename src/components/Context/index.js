//This is all that's needed in order to create a new context, a provider and a consumer.

import React from 'react';

const ScoreboardContext = React.createContext();

export const Provider = ScoreboardContext.Provider;
export const Consumer = ScoreboardContext.Consumer;