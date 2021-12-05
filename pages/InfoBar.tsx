interface InfoBarProps {
  text?: string;
}

export default function InfoBar({ text }: InfoBarProps) {
  return (
    <>
      <div className="textWrapper">Find us at Birkenhead Market</div>
    </>
  );
}
