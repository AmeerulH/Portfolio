const fmt = new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" });

export function period(start: string, end?: string | null) {
  return `${fmt.format(new Date(start))} to ${end ? fmt.format(new Date(end)) : "Present"}`;
}

export function modelNumber(index: number) {
  return `M-${String(index + 1).padStart(2, "0")}`;
}

export function monthYear(iso: string) {
  return fmt.format(new Date(iso));
}

export const kindLabel: Record<string, string> = {
  product: "Product",
  clientWebsite: "Client website",
  openSource: "Side project",
};

export const availabilityLabel: Record<string, string> = {
  open: "Open to opportunities",
  limited: "Limited availability",
  closed: "Not available",
};
