import cx from "./cx"
import data from "./data"

interface IccordionItemProps {
  title: string
  description: string
}

const buildITem = ({
  title,
  description,
}: IccordionItemProps): HTMLLIElement => {
  const $tab = document.createElement("button")
  $tab.setAttribute("type", "button")
  $tab.className = cx("tab")
  $tab.textContent = title

  const $desc = document.createElement("div")
  $desc.className = cx("description")
  $desc.textContent = description

  const $item = document.createElement("li")
  $item.className = cx("item", { current: false })
  $item.append($tab, $desc)

  return $item
}

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string | null = null

  const handleClick = (event: Event) => {
    const $el = event.target as HTMLElement
    if (!$el.classList.contains(".tab")) return

    const targetId = $el.parentElement!.dataset.id!
    if (!targetId) return

    currentId = targetId === currentId ? null : targetId

    for (const $item of $items) {
      $item.classList.toggle(cx("current"), $item.dataset.id === currentId)
    }
  }

  const $items = data.map(buildITem)
  const $ul = document.createElement("ul")

  $ul.className = cx("container")
  $ul.append(...$items)
  $ul.addEventListener("click", handleClick)
  ;($items[0].children[0] as HTMLElement).click()

  wrapper.appendChild($ul)
}
