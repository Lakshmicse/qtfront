export const authRole = {
  SuperAdmin:['superadmin','admin','user'],
  Admin: ['admin', 'user'],
  User: ['user'],
  Default : ['default']
};

export const defaultUser = {
  displayName: 'John Alex',
  email: 'demo@example.com',
  token: 'access-token',
  role: 'user',
  photoURL: '/assets/images/avatar/A11.jpg',
};
export const allowMultiLanguage = import.meta.env.VITE__MULTILINGUAL === 'true';
export const fileStackKey = import.meta.env.VITE__FILESTACK_KEY;
export const initialUrl = import.meta.env.VITE__INITIAL_URL; // this url will open after login

// export const baseUrl = "http://172.245.70.150:3500/v1/"
// export const mediaUrl = "http://172.245.70.150:3500/"
export const baseUrl = "http://localhost:3500/v1/"
export const mediaUrl = "http://localhost:3500"
