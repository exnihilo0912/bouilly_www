import { Outlet } from 'react-router';

export default function BaseLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}