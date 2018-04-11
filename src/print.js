export default function printMe() {
  import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    return _.default;
  }).then(function(_){
    console.log(
      _.join(['Another', 'module', 'loaded!'], ' ')
    );
  });
}