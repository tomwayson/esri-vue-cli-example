<template>
  <div ref="map" class="map"></div>
</template>

<script>
import { loadModules } from 'esri-loader';

export default {
  name: 'map',
  mounted: function () {
    loadModules(['esri/views/MapView', 'esri/WebMap'])
    .then(([MapView, WebMap]) => {
      // then we load a web map from an id
      var webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: 'f2e9b762544945f390ca4ac3671cfa72'
        }
      });
      // and we show that map in a container w/ id #viewDiv
      var view = new MapView({
        map: webmap,
        container: this.$refs.map
      });
    })
    .catch(err => {
      // handle any errors
      console.error(err);
    });
  }
}
</script>

<style>
.map {
  height: 500px;
}
</style>
