// Örnek kullanımlar

new Youtube("Sagopa")
    .getVideos()
    .then((_this) => {
        console.log(_this.videos);
        console.log(_this.leastToMost());
        console.log(_this.mostToLeast());
        console.log(_this.mostViewed());
        console.log(_this.leastViewed());

        return _this;
    })
    .catch(console.error);


new Youtube("sago")
  .getVideos()
  .then(console.log)
  .catch(console.error);
