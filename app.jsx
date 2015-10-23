App = React.createClass({
  getPrizes() {
    return prizesObject;
  },

  renderPrizes(){
    return this.getPrizes().map((prize) => {
      return <Prize key={}
    })
  }
});

