import cx from "./cx"
import data from "./data"

const AccordionReact = () => {
  const currentId = data[0].id

  return (
    <>
      <h3>#1. React로 아코디언 만들기</h3>
      <ul className={cx("container")}>
        {data.map(({ id, title, description }) => {
          return (
            <li className={cx("item", { current: currentId === id })} key={id}>
              <button type="button" className={cx("tab")}>
                {title}
              </button>
              {currentId === id && (
                <div className={cx("description")}>
                  <p>{description}</p>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default AccordionReact
