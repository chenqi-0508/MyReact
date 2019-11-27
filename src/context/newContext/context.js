import React from 'react'
const ctx1 = React.createContext({
    a: 789,
});
const ctx2 = React.createContext({
    c: 456
});

export default {
    ctx1,
    ctx2
};