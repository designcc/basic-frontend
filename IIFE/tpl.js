var tpl = (function() {
  function tab(field) {
    switch (field) {
      case 'tital':
        return `<div class="tab-item {{current}}"> {{tital}} </div>`;
      case 'content':
        return `<div class="page-item {{current}}"> {{content}} </div>`;
      default:
        break;
    }
  }
  return {
    tab: tab
  };
})();