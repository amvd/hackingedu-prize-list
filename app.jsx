App = React.createClass({
  getPrizes() {
    return prizesObject;
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
        <header>
          <h1>Prize List</h1>
        </header>

        <div className="prize-list">
          {this.renderPrizes()}
        </div>
      </div>
    );
  }
});

