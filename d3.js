import {
  event,
  node,
  mouse,
  namespace,
  namespaces,
  requote,
  select,
  selectAll,
  selection,
  touch,
  touches
} from "./index";

export default {
  get event() { return event; },
  get node() { return node; },
  mouse: mouse,
  namespace: namespace,
  namespaces: namespaces,
  requote: requote,
  select: select,
  selectAll: selectAll,
  selection: selection,
  touch: touch,
  touches: touches
};
