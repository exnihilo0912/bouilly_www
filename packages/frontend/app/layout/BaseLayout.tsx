import { Outlet } from 'react-router';

export default function BaseLayout() {
  return (
    <>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>

  );
}