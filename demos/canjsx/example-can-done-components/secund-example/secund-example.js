import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './secund-example.less';
import view from './secund-example.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the secund-example component'
  }
});

export default Component.extend({
  tag: 'secund-example',
  ViewModel,
  view
});
