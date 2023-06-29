function switchToPreact(pkg, dep) {
  if (pkg.dependencies[dep]) {
    pkg.dependencies[dep] = 'npm:@preact/compat@17.1.2';
  }
}

function readPackage(pkg) {
  if (pkg.dependencies) {
    switchToPreact(pkg, 'react');
    switchToPreact(pkg, 'react-dom');
  }
  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}
