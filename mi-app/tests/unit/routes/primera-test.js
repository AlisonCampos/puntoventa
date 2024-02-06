import { module, test } from 'qunit';
import { setupTest } from 'mi-app/tests/helpers';

module('Unit | Route | primera', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:primera');
    assert.ok(route);
  });
});
