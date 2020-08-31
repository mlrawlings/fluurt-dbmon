import {
  attr,
  compute,
  get,
  loopOf,
  source,
  set,
  on,
  createRenderer,
  createRenderFn,
  computeAsync,
  text,
  textContent,
  effect,
  walk,
  beginBatch,
  endBatch
} from "fluurt/dom";

import { removeWhitespace, getNode, after, before, inside, replace, next, over, out } from "./util";

const app_template = removeWhitespace(`
  <table class="table table-striped latest-data">
    <tbody></tbody>
  </table>
`);
const app_walks = next(1) + inside + out(2) + over(1);
const app_hydrate = () => {
  const databases = source([]);
  const load = () => {
    const batch = beginBatch();
    Monitoring.renderRate.ping();
    set(databases, ENV.generateData().toArray());
    endBatch(batch);
    setTimeout(load, ENV.timeout);
  };

  effect(() => setTimeout(load, ENV.timeout), null, 1);

  loopOf(
    databases,
    createRenderer(
      removeWhitespace(`
        <tr>
          <td class="dbname"></td>
          <td class="query-count">
            <span></span>
          </td>
        </tr>
      `), 
      next(1) + getNode + over(1) + next(1) + getNode + out(1) + after + out(1) + over(1), 
      undefined, 
      (db) => {
        walk();
        textContent(compute(_db => _db.dbName, db, 1));
        walk();
        attr("class", compute(_db => _db.lastSample.countClassName, db, 1))
        textContent(compute(_db => _db.lastSample.nbQueries, db, 1));
        loopOf(
          compute(_db => _db.lastSample.topFiveQueries, db, 1),
          createRenderer(
            removeWhitespace(`
              <td>
                <div class="popover left">
                  <div class="popover-content"></div>
                  <div class="arrow"></div>
                </div>
              </td>
            `), 
            getNode + next(1) + before + next(1) + getNode + out(2) + over(1), 
            undefined, 
            (query) => {
              walk();
              attr("class", compute(_query => _query.elapsedClassName, query, 1));
              text(compute(_query => _query.formatElapsed, query, 1));
              walk();
              textContent(compute(_query => _query.query, query, 1));
            }
          )
        );
      }
    )
  );
};

const App = createRenderFn(app_template, app_walks, [], app_hydrate);
document.querySelector('#dbmon').appendChild(App());
