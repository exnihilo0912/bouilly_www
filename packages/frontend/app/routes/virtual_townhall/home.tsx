import Page from '~/components/Page';

import type { Route } from "./+types/home";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Bouilly-en-Gâtinais" },
    { name: "description", content: "Commune de Bouilly-en-Gâtinais" },
  ];
}

export default function Home() {
  return (
    <Page>
      <h1>Virtual Townhall</h1>
      <p>The rest in coming...</p>
    </Page>
  );
}
