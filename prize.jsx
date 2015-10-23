Prize = React.createClass({

  renderPrizeItems(){
    let items = [];
    for(var i = 0; i < this.props.prizes.length; i++) {
      items.push(<tr><td>{this.props.prizes[i]}</td></tr>);
    };
    return items;
  },

  renderUrl(){
    if(this.props.url.length > 0) {
      return <div>
        <br/>
        <a href={this.props.url}>Provided Link</a>
      </div>
    }
  },

  render() {
    return (
      <div className="col-md-4">
        <div className="prize panel panel-default">
          <div className="panel-heading">
            <h4>{this.props.title}</h4>
          </div>
          <table className="table">
            <thead>
              <th>Prizes</th>
            </thead>
            <tbody>
              {
                this.renderPrizeItems()
              }
            </tbody>
          </table>
          <div className="panel-body">
          {
            this.props.info ?
              <div className="info">
                <h3>Additional Info</h3>
                <div>{this.props.info}</div>
              </div>
            : ""
          }
          { this.renderUrl() }
          </div>
        </div>
      </div>
    )
  }

})