Prize = React.createClass({

  renderPrizeItems(){
    let items = [];
    for(var i = 0; i < this.props.prizes.length; i++) {
      items.push(<li key={this.props.title+i}>{this.props.prizes[i]}</li>);
    };
    return items;
  },

  renderUrl(){
    if(this.props.url.length > 0) {
      return <div>
        <center>
          <a href={this.props.url}><h3>API Documentation</h3></a>
        </center>
      </div>
    }
  },

  renderLogo(){
    if(this.props.logo.length > 0) {
      return <center>
        <img className="logo" src={this.props.logo} alt="Company Logo" />
      </center>
    }
  },

  render() {

    return (
      <div className="col-md-4 prize">
        <div className="panel panel-default" style={{height: 370+'px'}}>
          <div className="panel-heading">
            <h4>{this.props.title}</h4>
          </div>
          <div className="panel-body">
            <div className="body-content">
              <center>
                <h4>Prizes</h4>
              </center>
              <ul>
                {
                  this.renderPrizeItems()
                }
              </ul>
            {
              this.props.info ?
                <div className="info">
                  <center>
                    <h4>Additional Info</h4>
                  </center>
                  <div>{this.props.info}</div>
                </div>
              : ""
            }

            </div>
            
          </div>
          { this.renderUrl() }
        </div>
      </div>
    )
  }

})