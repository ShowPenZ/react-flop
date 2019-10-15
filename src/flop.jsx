import React from 'react';
import ClassName from 'classnames';
import PropTypes from 'prop-types';
import './flop.css';

class Flop extends React.Component {
  static propTypes = {
    imgFLop: PropTypes.string.isRequired,
    imgFLoped: PropTypes.string.isRequired,
    cardName: PropTypes.string,
    slot: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    haveGift: PropTypes.bool,
    isFlop: PropTypes.bool,
    imgFLopWidth: PropTypes.number.isRequired,
    imgFLopHeight: PropTypes.number.isRequired,
  };

  static defaultProps = {
    cardName: '',
    slot: null,
    isFlop: false,
    haveGift: false,
  };

  render() {
    const that = this;
    const { imgFLop, imgFLoped, cardName, slot, onClick, isFlop, imgFLopWidth, imgFLopHeight } = that.props;

    return (
      <div className={ClassName('flopCardContainer', cardName)} style={{ width: imgFLopWidth, height: imgFLopHeight }}>
        <div className={isFlop ? 'flopped' : ''} onClick={onClick}>
          <div className="front">
            <img src={imgFLop} alt="" width={imgFLopWidth} height={imgFLopHeight} />
          </div>
          <div className="back">
            <img src={imgFLoped} alt="" width={imgFLopWidth} height={imgFLopHeight} />
            {isFlop ? slot : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Flop;
