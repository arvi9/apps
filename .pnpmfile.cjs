function switchToPreact(pkg, dep) {
  if (pkg.dependencies[dep]) {
    pkg.dependencies[dep] = 'npm:@preact/compat@17.1.2';
  }
}

function readPackage(pkg) {
  if (pkg.dependencies) {
    // if(pkg.dependencies.react) {
    //   pkg.dependencies.react = 'npm:local-react';
    // }
    // if(pkg.dependencies['react-dom']) {
    //   pkg.dependencies['react-dom'] = 'npm:local-react-dom';
    // }
    // switchToPreact(pkg, 'react');
    // switchToPreact(pkg, 'react-dom');
  }
  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}
