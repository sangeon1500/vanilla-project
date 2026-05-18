import { useEffect, useRef, useState } from "react"
import cx from "./cx"
import data from "./data"

interface AccordionItemProps {
  id: string
  title: string
  description: string
  current: boolean
  toggle: () => void
}

const AccordionItem = ({
  id,
  title,
  description,
  current,
  toggle,
}: AccordionItemProps) => {
  const desRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const $desc = desRef.current
    $desc &&
      ($desc.style.maxHeight = current ? `${$desc.scrollHeight}px` : "0px")
  }, [current])

  return (
    <li className={cx("item", { current })} key={id}>
      <button type="button" className={cx("tab")} onClick={toggle}>
        {title}
      </button>
      {current && (
        <div className={cx("description")} ref={desRef}>
          <p>{description}</p>
        </div>
      )}
    </li>
  )
}

const AccordionReact = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id)

  const handleToggle = (id: string) => {
    setCurrentId(currentId === id ? null : id)
  }

  return (
    <>
      <h3>#1. React로 아코디언 만들기</h3>
      <ul className={cx("container")}>
        {data.map(({ id, title, description }) => {
          return (
            <AccordionItem
              id={id}
              title={title}
              description={description}
              current={currentId === id}
              toggle={() => handleToggle(id)}
            />
          )
        })}
      </ul>
    </>
  )
}

export default AccordionReact
