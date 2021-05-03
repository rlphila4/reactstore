export const makeActionCreator = (type, ...argNames) => {
  return function(...args) {
      let action = {};
      action.type = type;
      action.payload = {};
      argNames.forEach((arg, index) => {
        if(args[index])
          action.payload[argNames[index]] = args[index]
      });
      return action
  }
};
