<template>
  <div ref="scene" class="scene"></div>
</template>

<script>
import { loadModules } from 'esri-loader';

export default {
  name: 'map',
  mounted: function () {
    loadModules(['esri/views/SceneView', 'esri/Map'])
    .then(([SceneView, Map]) => {
      // show that scene in a container
      var view = new SceneView({
        // An instance of Map or WebScene
        map: new Map({
          basemap: 'hybrid',
          ground: 'world-elevation',
        }),
        container: this.$refs.scene,
        camera: {
          position: [7.654, 45.919, 5184],
          tilt: 80
        }
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
.scene {
  height: 500px;
}
</style>
