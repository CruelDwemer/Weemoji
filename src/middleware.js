export const middleware = store => next => action => {
    // delete if it will be never used in future
    console.log('middleware!', store.getState());
    return next(action);
}