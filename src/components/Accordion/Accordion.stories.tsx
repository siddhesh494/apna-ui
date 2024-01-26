import type { Meta, StoryObj } from '@storybook/react';

import Accordion from './Accordion';
import React, {useState} from 'react';

const meta: Meta<typeof Accordion> = {
  title: 'ApnaUI/Accordion',
  component: Accordion,
}

export default meta;
type Story = StoryObj<typeof Accordion>;

export const FirstAccordion: Story = {


  render: (args) => {
    const [accordionState, setAccordionState] = useState(true)
    
    return <Accordion {...args}
      handleOnClick={() => {
      setAccordionState(prev => !prev)
      }}
      isOpen={accordionState}
    >
      <div>
        <h1>I am Siddhesh Shinde</h1>
        <p>I am a Software developer with 2+ years of experience in writing efficient and reusable code. I help companies to achieve their product development target. The technology I am familiar with is Javascript, Typescript, Node.js, ExpressJS, and React.</p>
        <p>I love to apply my software development experience to help tech companies create their required product.
</p>
      </div>
    </Accordion>
  }
}

FirstAccordion.args = {
  title: "Default Title",
  children: <div> Dummy container</div>,
  isOpen: true,
  handleOnClick: () => {

  }
}
