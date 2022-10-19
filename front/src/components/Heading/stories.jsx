import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Escuro',
    // light: 'false',
  },
  argTypes: {
    children: { type: 'string' },
    // light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} light={false} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};
Dark.args = {
  children: 'Claro',
  colorDark: false,
  // light: 'false',
};
