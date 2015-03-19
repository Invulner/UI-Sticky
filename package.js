
Package.describe({
  name    : 'semantic:ui-sticky',
  summary : 'Semantic UI - Sticky: Single component release',
  version : '1.11.4',
  git     : 'git://github.com/Semantic-Org/UI-Sticky.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'sticky.css',
    'sticky.js'
  ], 'client');
});
