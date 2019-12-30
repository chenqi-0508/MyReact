export const ADDUSERACTION = Symbol("addUserAction");
export const DELETEUSERACTION = Symbol("deleteUserAction");
export const UPDATEUSERACTION = Symbol("updateUserAction");


export const addUserAction = (user) => ({
    type: ADDUSERACTION,
    payload: user
});

export const deleteUserAction = (id) => ({
    type: DELETEUSERACTION,
    payload: id
});

export const updateUserAction = (user) => ({
    type: UPDATEUSERACTION,
    payload: user
});
