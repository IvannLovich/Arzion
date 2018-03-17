import React from 'react'
import { shallow } from '../tester'

import Form from '../src/components/Form'


describe('A Form component', function() {
  it('should render two inputs', function() {
    const wrapper = shallow(<Form />)
    const input = wrapper.find('input')
    expect(input.length).toBe(2)
  })

})
