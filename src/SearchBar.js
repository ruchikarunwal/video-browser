import React from 'react';
class SearchBar extends React.Component {
  state = { term: '' };
  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
    this.props.onFormSubmit(this.state.term);
  }
  render() {
    return (
      <div className="search-bar ui segment" style={{ backgroundColor: 'black' }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className=" field ">
            {/* <label style={{ color: 'white', textAlign: 'center' }}>Video Search</label> */}
            <input
              type="text"
              placeholder='Search your video'
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div >
    );
  }
}
export default SearchBar