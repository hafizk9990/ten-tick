let localDB = null;

const assignLocalDB = (incomingValue) => {
  console.log('Setting localDB');
  localDB = incomingValue;
}

export { localDB, assignLocalDB }
