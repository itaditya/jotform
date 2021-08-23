import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Provider, Form, Props } from '../src';

const meta: Meta = {
  title: 'Usage/Basic Form',
};

export default meta;

const Template: Story<Props> = args => {
  return (
    <Provider>
      <Form>
        Hello
      </Form>
    </Provider>
  );
};

export const Default = Template.bind({});
