'use strict';

var React = require('react/addons');


// CSS
require('normalize.css');
require('../styles/main.scss');
var imageDatas = require('../data/imageData.json');

// 利用自执行函数， 将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.imageURL = require('../images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);


var ReactPhotoWallApp = React.createClass({
  render: function() {
    return (
      <section className="stage">
          <section className="img-se"> </section>
          <nav className="controller-nav"></nav>
      </section>
    );
  }
});
React.render(<ReactPhotoWallApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReactPhotoWallApp;
