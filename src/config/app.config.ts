interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['End User'],
  customerRoles: ['Guest'],
  tenantRoles: ['End User'],
  tenantName: 'Organization',
  applicationName: 'Car Rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read vehicle information',
    'Read reservation information',
    'Read user profiles',
    'Read organization information',
  ],
  ownerAbilities: ['Read vehicle information', 'Create reservations', 'Read reservations', 'Read usage tracking'],
  getQuoteUrl: 'https://app.roq.ai/proposal/8ad76819-e508-4e44-a44a-6c32ca9e5caf',
};
