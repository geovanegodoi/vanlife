import type { Meta } from '@storybook/react';
import { LoginForm } from './login-form';

const Story: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: 'Components/LoginForm',
};
export default Story;

export const Primary = {
  args: {},
};
