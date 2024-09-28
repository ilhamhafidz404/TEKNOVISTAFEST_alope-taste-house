type TitleProps = { text: string };

function Title({ text }: TitleProps) {
  return (
    <h3 className="text-2xl md:text-3xl font-semibold text-gray-200">{text}</h3>
  );
}

type SubtitleProps = { text: string };

function Subtitle({ text }: SubtitleProps) {
  return (
    <p className="text-sm md:text-base font-medium text-[#bc8b57] uppercase">
      {text}
    </p>
  );
}

export { Title, Subtitle };
