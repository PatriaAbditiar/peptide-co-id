export interface Seller {
  id: string;
  name: string;
  type: "lokal" | "internasional";
  ships_to_indonesia: boolean;
  products: string[];
  website: string;
  verified: boolean;
  notes: string;
  affiliate_link: string | null;
}
