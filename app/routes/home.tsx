import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "あくらくう" },
    { name: "うーん？🤔🤔🤔🤔🤔", content: "うーん？🤔🤔🤔🤔🤔" },
  ];
}

export default function Home() {
  return <Welcome />;
}
