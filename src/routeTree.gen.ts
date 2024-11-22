/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router';

// Import Routes

import { Route as rootRoute } from './routes/__root';

// Create Virtual Routes

const SampleLazyImport = createFileRoute('/sample')();
const IndexLazyImport = createFileRoute('/')();

// Create/Update Routes

const SampleLazyRoute = SampleLazyImport.update({
  id: '/sample',
  path: '/sample',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/sample.lazy').then(d => d.Route));

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then(d => d.Route));

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexLazyImport;
      parentRoute: typeof rootRoute;
    };
    '/sample': {
      id: '/sample';
      path: '/sample';
      fullPath: '/sample';
      preLoaderRoute: typeof SampleLazyImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute;
  '/sample': typeof SampleLazyRoute;
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute;
  '/sample': typeof SampleLazyRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/': typeof IndexLazyRoute;
  '/sample': typeof SampleLazyRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: '/' | '/sample';
  fileRoutesByTo: FileRoutesByTo;
  to: '/' | '/sample';
  id: '__root__' | '/' | '/sample';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute;
  SampleLazyRoute: typeof SampleLazyRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  SampleLazyRoute: SampleLazyRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/sample"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/sample": {
      "filePath": "sample.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */