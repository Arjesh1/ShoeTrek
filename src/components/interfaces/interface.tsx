export interface User {
  city?: string | undefined;
  email?: string | undefined;
  uid?: string | undefined;
  postalCode?: string | undefined;
  firstName?: string | undefined;
  number?: string | undefined;
  country?: string | undefined;
  region?: string | undefined;
  streetAddress?: string | undefined;
  lastName?: string | undefined;
}

export interface ContactType {
  date?: number | undefined;
  email?: string | undefined;
  fName?: string | undefined;
  lName?: string | undefined;
  message?: string | undefined;
  phone?: string | undefined;
  subject?: string | undefined;
}
