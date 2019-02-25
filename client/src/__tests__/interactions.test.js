import React from 'react'
import { mount } from 'enzyme'
import { Form } from '../containers/games/Form'

describe('Test user interactions', () => {
  test('button press', () => {
    const mockSubmitCall = jest.fn()
    const form = mount(<Form submit={mockSubmitCall} />)
    form.find('button').simulate('click')
    expect(mockSubmitCall.mock.calls.length).toEqual(1)
  })
})
