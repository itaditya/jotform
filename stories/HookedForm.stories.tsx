import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Provider, useField } from '../src';

const meta: Meta = {
  title: 'Usage/Hooked Form',
};

export default meta;

function Field(props) {
  const { name, initialValue } = props;
  const { value, onChange } = useField({ name, initialValue });
  console.log(`value`, value); // aditodo remove this
  return <input name={name} type="text" value={value} onChange={onChange} />;
}

function Form() {
  return (
    <form>
      <Field name="username" initialValue={''} />
      <Field name="email" initialValue={''} />
    </form>
  );
}

const Template: Story = (args) => {
  return (
    <Provider>
      <Form />
    </Provider>
  );
};

export const Default = Template.bind({});
