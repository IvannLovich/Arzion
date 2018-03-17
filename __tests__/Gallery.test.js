import React from 'react'
import { shallow } from '../tester'

import Gallery from '../src/components/Gallery'

describe('A Gallery component', function() {
  it('should render an image giving an array of images with a single image', function() {
    const wrapper = shallow(<Gallery images={[ 'http://image.png' ]} />)
    const images = wrapper.find('img')
    expect(images.length).toBe(1)
  })

  it('should render the same images we are passing as props in the array', function() {
    const wrapper = shallow(<Gallery images={[ 'http://image.png', 'http://image.png', 'http://image.png' ]} />)
    const images = wrapper.find('img')
    expect(images.length).toBe(3)
  })
})
