import ImageRequestService from 'components/servis/apiServis';
import { Component } from 'react';
import PropTypes from 'prop-types';
export const imageRequestService = new ImageRequestService();

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  onChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = async ev => {
    const { searchQuery } = this.state;
    const { getImages } = this.props;

    ev.preventDefault();

    imageRequestService.query = searchQuery;
    imageRequestService.resetPage();

    const images = await imageRequestService.getImage();

    if (images) {
      getImages(images);
    }
    if (imageRequestService.query === '') {
      getImages('');
    }
  };

  render() {
    const { children } = this.props;

    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <input
            value={this.searchQuery}
            onChange={this.onChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          {children}
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  getImages: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
