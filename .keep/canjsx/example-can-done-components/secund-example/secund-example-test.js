import QUnit from 'steal-qunit';
import { ViewModel } from './secund-example';

// ViewModel unit tests
QUnit.module('gen/secund-example');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the secund-example component');
});
