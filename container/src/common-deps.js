window.SystemJS = window.System

function insertNewImportMap(newMapJSON) {
  const newScript = document.createElement('script')
  newScript.type = 'systemjs-importmap'
  newScript.text = JSON.stringify(newMapJSON)
  const allMaps = document.querySelectorAll('script[type="systemjs-importmap"]')

  allMaps[allMaps.length - 1].insertAdjacentElement(
    'afterEnd',
    newScript
  )
}

const devDependencies = {
  imports: {
    react: 'https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.development.js',
    'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.development.js',
    'react-dom/server': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom-server.browser.development.js',
    'single-spa': 'https://unpkg.com/single-spa@4.3.2/lib/umd/single-spa.min.js',
    lodash: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js',
    rxjs: 'https://unpkg.com/rxjs@6.4.0/bundles/rxjs.umd.js',
    jquery: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    popper: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js',
    bootstrap: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js'
  }
}

const prodDependencies = {
  imports: {
    react: 'https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js',
    'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js',
    'react-dom/server': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom-server.browser.production.min.js',
    'single-spa': 'https://unpkg.com/single-spa@4.3.2/lib/umd/single-spa.min.js',
    lodash: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js',
    rxjs: 'https://unpkg.com/rxjs@6.4.0/bundles/rxjs.umd.min.js',
    jquery: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    popper: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js',
    bootstrap: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js'
  }
}

const devMode = true // you will need to figure out a way to use a set of production dependencies instead
if (devMode) {
  insertNewImportMap(devDependencies)
} else {
  insertNewImportMap(prodDependencies)
}
