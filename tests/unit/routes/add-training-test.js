import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | add-training', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:add-training');
    assert.ok(route);
  });
});
