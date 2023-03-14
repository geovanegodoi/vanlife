import { LoginFormFields } from '../../components';

export async function retrieveFormData(request: Request): Promise<{
  email: string;
  password: string;
} | null> {
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
