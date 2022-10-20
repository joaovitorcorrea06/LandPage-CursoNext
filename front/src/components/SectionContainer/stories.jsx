import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          fuga, consequatur omnis beatae repellat architecto veniam fugiat quis
          earum saepe dolores ipsum provident voluptatibus praesentium officiis,
          est eos! Quae, minus?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
