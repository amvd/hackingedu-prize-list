App = React.createClass({
  getPrizes() {
    return prizesObject;
  },

  componentDidMount(){
    // grid = document.querySelector('.prize-list');
    // msnry = new Masonry(grid, {
    //   itemSelector: '.prize',
    //   columnWidth: 200
    // });
  },

  renderPrizes(){
    return this.getPrizes().map((prize) => {
      return <Prize
        key={prize.id}
        title={prize.title}
        prizes={prize.prizes}
        info={prize.info}
        logo={prize.logo}
        url={prize.url} />;
    });
  },

  render() {

    return (
      <div className="container">
        <br />
        <br />
        <div className="prize-list"> 
          {this.renderPrizes()}
        </div>
      </div>
    );
  }
});

