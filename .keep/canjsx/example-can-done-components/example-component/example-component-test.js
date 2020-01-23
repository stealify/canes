import QUnit from 'steal-qunit';
import { ViewModel } from './example-component';

// ViewModel unit tests
QUnit.module('gen/example-component');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the example-component component');
});
