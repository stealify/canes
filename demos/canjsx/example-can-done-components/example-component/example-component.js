import 'can-view-autorender'
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './example-component.less';
import view from './example-component.stache!';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the example-component component'
  }
});

export default Component.extend({
  tag: 'example-component',
  ViewModel,
  view
});
