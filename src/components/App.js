import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { imageRequestService, Searchbar } from './Searchbar/SearchBar';

class App extends Component {
  state = {
    images: null,
    isLoad: false,
    largeImage: null,
    showModal: false,
  };

  getImages = ({ hits }) => {
    this.setState({ images: hits });
  };

  isLoadToggle = () => {
    this.setState(({ isLoad }) => ({ isLoad: !isLoad }));
  };

  onLoadMore = async () => {
    this.isLoadToggle();

    const images = await imageRequestService.getImage();

    this.isLoadToggle();

    const { hits: newImages } = images;

    if (images) {
      this.setState(({ images }) => {
        return { images: [...images, ...newImages] };
      });
    }
  };

  render() {
    const { images, isLoad, showModal } = this.state;

    const spinnerStyles = {
      margin: '0 auto',
    };

    return (
      <div className="App">
        <Searchbar isLoadToggle={this.isLoadToggle} getImages={this.getImages}>
          <Button type="submit" label="Search" className="SearchForm-input" />
        </Searchbar>

        {images && images.length > 0 && (
          <>
            <ImageGallery onClick={this.toggleModal} images={images} />
            {isLoad ? (
              <ThreeDots
                height="100"
                width="120"
                radius="14"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={spinnerStyles}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              <Button
                onLoadMore={this.onLoadMore}
                type="button"
                label="Load more"
                className="Button"
              />
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;
