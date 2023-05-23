/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ProgressBar } from './components';

const HomePage = lazy(() =>
  import('./pages/Home').then((module) => ({ default: module.Home }))
);
const GeneratePage = lazy(() =>
  import('./pages/Generate').then((module) => ({ default: module.Generate }))
);
const PaymentPage = lazy(() =>
  import('./pages/Payment').then((module) => ({ default: module.Payment }))
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<ProgressBar progress={100} />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '/create',
    element: (
      <Suspense fallback={<>Loading...</>}>
        <GeneratePage />
      </Suspense>
    ),
  },
  {
    path: '/payment',
    element: (
      <Suspense fallback={<>Loading...</>}>
        <PaymentPage />
      </Suspense>
    ),
  },
]);
