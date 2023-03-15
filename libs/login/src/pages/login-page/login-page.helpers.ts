import { OrNull } from '@vanlife/shared';
import { LoginFormFields } from '../../components';

interface FormData {
  email: string;
  password: string;
}

export async function retrieveFormData(
  request: Request
): Promise<OrNull<FormData>> {
  const formData = await request.formData();
  const email = formData.get(LoginFormFields.Email) as string;
  const password = formData.get(LoginFormFields.Password) as string;
  return email && password ? { email, password } : null;
}

export function doLogin(postData: { email: string; password: string }): {
  user: { email: string; password: string };
  token: string;
} {
  return {
    user: postData,
    token: 'here is your token',
  };
}
