import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Heading from '../Heading.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Heading, { props: { text: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
