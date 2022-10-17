module.exports = () => {
  return {
    name: 'test',
    setup(build) {
      build.onEnd((buildResult) => {
        console.log(buildResult);
      });
    },
  };
};
