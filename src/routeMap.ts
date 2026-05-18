import type { ComponentType } from "react"
import Accordions from "./components/01_accordion"

export const _routeMap = {
  root: {
    name: "root",
    children: ["accordion"],
  },
  accordion: {
    name: "accordion",
    children: Accordions,
  },
}
