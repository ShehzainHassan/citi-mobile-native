type RegexRule = {
  regex: RegExp;
  message: string;
};

type MatchRule = {
  matchField: string;
  message: string;
};

export type ValidationRule = RegexRule | MatchRule;
