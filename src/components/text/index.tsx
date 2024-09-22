type TitleProps = { text: string };

function Title({ text }: TitleProps) {
  return <h3 className="text-3xl font-semibold">{text}</h3>;
}

type SubtitleProps = { text: string };

function Subtitle({ text }: SubtitleProps) {
  return <p className="font-medium text-indigo-500 uppercase">{text}</p>;
}

export { Title, Subtitle };
