import styled from "styled-components/native";

/* --- base styles & variant fns (keep your existing theme lookups) --- */
const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
  color: ${theme.colors.text.error};
`;

const caption = (theme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
`;

const variants = { body, label, caption, error, hint };

/* --- safe resolver: always returns a string of CSS --- */
const resolveVariant = (variant, theme) => {
  const key = typeof variant === "string" && variant in variants ? variant : "body";
  const fn = variants[key];
  return fn(theme);
};

/* --- Export Text with .attrs default so wrapped/styled consumers get it --- */
export const Text = styled.Text.attrs((props) => ({
  variant: props.variant || "body",
}))`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => resolveVariant(variant, theme)}
`;

/* keep defaultProps for extra safety (some code/tests rely on it) */
Text.defaultProps = {
  variant: "body",
};
