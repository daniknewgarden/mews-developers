import styled from "styled-components";
import { Typography, TypographyProps } from "..";

export interface ChipProps {
  label: string;
  imagePath?: string;
  TypographyProps?: TypographyProps;
}

const ChipWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 3px 10px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.outline.variant};
`;

const ChipImage = styled.span<{ $img: string }>`
  width: 18px;
  height: 18px;
  border-radius: 100px;

  background-image: url(${({ $img }) => $img});
  background-size: cover;
`;

export function Chip({ label, imagePath, TypographyProps }: ChipProps) {
  return (
    <ChipWrapper>
      {imagePath && <ChipImage data-testid="chip-image" $img={imagePath} />}
      <Typography variant="labelLarge" color="secondary" {...TypographyProps}>
        {label}
      </Typography>
    </ChipWrapper>
  );
}
