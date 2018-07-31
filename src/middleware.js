export const middleware = store => next => action => {
    console.log('middleware!', store.getState());
    return next(action);
}