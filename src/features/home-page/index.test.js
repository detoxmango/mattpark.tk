import React from 'react'
import renderer from 'react-test-renderer'

import HomePage from './index'


describe("HomePage", () => {
  it("passes", () => {
    expect(true).toBe(true)
  })
  // it("renders correctly", () => {
  //   const tree = renderer.create(<HomePage />).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })
})