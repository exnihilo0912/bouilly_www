import Page from '~/components/Page';

import type { Route } from "./+types/home";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Bouilly-en-Gâtinais" },
    { name: "description", content: "Commune de Bouilly-en-Gâtinais" },
  ];
}

export default function Schooling() {
  return (
    <Page>
      <h1>Services -- Schooling</h1>
      <p>The rest in coming...</p>
    </Page>
  );
}
