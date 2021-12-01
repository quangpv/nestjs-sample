export enum Role {
  ADMIN = 'admin',
  PARTNER = 'partner',
  USER = 'user',
  VISITOR = 'visitor',
}
export function userRoleOf(role: string) {
  switch (role) {
    case Role.USER.toString():
      return Role.USER;
    case Role.ADMIN.toString():
      return Role.ADMIN;
    case Role.PARTNER.toString():
      return Role.PARTNER;
    default:
      return Role.VISITOR;
  }
}
