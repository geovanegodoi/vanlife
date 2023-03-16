import type { Meta } from '@storybook/react';
import { LoginPage } from './login-page';

const Story: Meta<typeof LoginPage> = {
  component: LoginPage,
  title: 'Pages/LoginPage',
};
export default Story;

export const Primary = {
  args: {},
};
