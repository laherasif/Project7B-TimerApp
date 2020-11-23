import React from "react"
import {  shallow,ShallowWrapper } from "enzyme"
import TimerButton from "./index"

describe("TimerButton", () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;


  beforeEach(() => {
    container = shallow(
      <TimerButton
        buttonAction={jest.fn()}
        buttonValue={""}
      />
    )
  })

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
})
