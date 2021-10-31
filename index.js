function getRect(node) {
  return node.getBoundingClientRect();
}

/**
 * @target {node}
 * @offset {json}
 * @container {node}
 * ======== ======== ========
 */
class Rect {
  constructor(
    // Target Node
    target = {},
    // Offset
    offset = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    // Container
    container = document.documentElement
  ) {
    if (!target.nodeType) {
      return console.error(`Please pass in valid parameters .`);
    }

    // Target Assignment
    this.target = target;

    // Container Assignment
    this.container = container;

    // VW and VH in Container
    this.getOccupancy(({ width, height }) => {
      this.vw = width;
      this.vh = height;
    });
  }

  getOccupancy(callback, node = this.container) {
    const result = {
      width: node.clientWidth || node.offsetWidth,
      height: node.clientHeight || node.offsetHeight
    };

    return callback ? callback.call(this, result) : result;
  }

  compare() {
    const { top, left, right, bottom } = getRect(container);
  }
}

export default Rect;
