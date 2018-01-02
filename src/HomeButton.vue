<template>
  <div ref="map" class="map">
    <div ref="button"></div>
  </div>
</template>

<script>
import { loadModules } from 'esri-loader';

export default {
  name: 'home-button',
  mounted: function () {
    loadModules(['esri/map', 'esri/dijit/HomeButton'])
      .then(([Map, HomeButton]) => {
        // create map with the given options
        const map = new Map(this.$refs.map, {
          center: [-56.049, 38.485],
          zoom: 3,
          basemap: 'gray',
        });

        // initialize the locate button
        const button = new HomeButton({
          map: map
        }, this.$refs.button);
        button.startup();
      })
      .catch(err => {
        // handle any script or module loading errors
        console.error(err);
      });
  }
}
</script>

<style>
.map {
  height: 500px;
}
.HomeButton {
  position: relative;
  top: 125px;
  left: 20px;
  z-index: 50;
}
</style>
