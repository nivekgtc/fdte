import { theme } from "~/presentation/styles/theme";

type KeysOfType<T, U> = { [K in keyof T as T[K] extends U ? K : never]: K };

function createEnum<T, U extends T[keyof T]>(
  obj: T
): Readonly<{ [K in KeysOfType<T, U>[keyof KeysOfType<T, U>]]: U }> {
  const keys = Object.keys(obj) as Array<keyof T>;
  const enumValues = keys.reduce((acc, key) => {
    const value = obj[key];
    if (typeof value === "string") {
      return { ...acc, [key]: value };
    }
    return acc;
  }, {} as { [key in keyof T]: T[key] extends string ? T[key] : never });
  return Object.freeze(enumValues);
}

export const PokemonType = createEnum(theme.types);
export type IType = keyof typeof PokemonType;

export interface TypeType {
  type: IType;
}
