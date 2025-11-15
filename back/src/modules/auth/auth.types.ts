export interface RegisterBody {
  avatar?: string;
  name: string;
  email: string;
  password: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface ResetPasswordBody {
  email: string;
  newPassword: string;
}
