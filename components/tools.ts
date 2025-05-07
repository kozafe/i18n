export type LocaleType = "id" | "en";

export const getDate = (locale: LocaleType, date: Date | number) => {
  const formatter = () => {
    if (locale === "id")
      return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return formatter().format(date);
};
