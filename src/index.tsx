import { App } from '@pages/app/app';
import * as React from 'react';
import { createRoot } from 'react-dom/client';


function createRootContainer(): HTMLElement {
  const rootNode = document.createElement('div');
      
  rootNode.setAttribute('id', 'root');

  document.body.appendChild((rootNode));

  return rootNode;
}

function renderAppToContainer(node: HTMLElement) {
  const appRoot = createRoot(node);
  appRoot.render((<App />));
}

renderAppToContainer(createRootContainer());